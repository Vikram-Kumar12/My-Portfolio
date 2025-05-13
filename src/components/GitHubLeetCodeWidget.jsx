import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const GitHubLeetCodeWidget = () => {
  // Configuration - replace with your details
  const GITHUB_USERNAME = 'Vikram-Kumar12';
  const LEETCODE_USERNAME = 'vikramkumar0120';
  const POLL_INTERVAL = 300000; // 5 minutes in milliseconds

  // State management
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState({ github: true, leetcode: true });
  const [error, setError] = useState({ github: null, leetcode: null });
  const [lastUpdated, setLastUpdated] = useState({ github: null, leetcode: null });

  // WebSocket connection for real-time updates
  const [socket, setSocket] = useState(null);
  const [realTimeUpdates, setRealTimeUpdates] = useState([]);

  // GitHub data processor
  const processGitHubData = (data) => {
    if (!data) return { pushes: 0, prs: 0, repos: new Set() };
    
    const pushes = data.filter(event => event.type === 'PushEvent').length;
    const prs = data.filter(event => event.type === 'PullRequestEvent').length;
    const repos = new Set(data.map(event => event.repo?.name));
    
    return { pushes, prs, repos: Array.from(repos) };
  };

  // Fetch GitHub data with error handling
  const fetchGitHubData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events`);
      if (!response.ok) throw new Error('GitHub data fetch failed');
      const data = await response.json();
      setGithubData(data);
      setLastUpdated(prev => ({ ...prev, github: new Date() }));
      return data;
    } catch (err) {
      setError(prev => ({ ...prev, github: err.message }));
      return null;
    } finally {
      setLoading(prev => ({ ...prev, github: false }));
    }
  };

  // Fetch LeetCode data with error handling
  const fetchLeetCodeData = async () => {
    try {
      const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`);
      if (!response.ok) throw new Error('LeetCode data fetch failed');
      const data = await response.json();
      setLeetcodeData(data);
      setLastUpdated(prev => ({ ...prev, leetcode: new Date() }));
      return data;
    } catch (err) {
      setError(prev => ({ ...prev, leetcode: err.message }));
      return null;
    } finally {
      setLoading(prev => ({ ...prev, leetcode: false }));
    }
  };

  // Initialize WebSocket connection
  useEffect(() => {
    const newSocket = io('https://realtime-updates-server.example.com', {
      query: { username: GITHUB_USERNAME }
    });

    newSocket.on('connect', () => {
      console.log('Connected to real-time updates server');
    });

    newSocket.on('github-event', (event) => {
      setRealTimeUpdates(prev => [
        { type: 'github', event, timestamp: new Date() },
        ...prev.slice(0, 4)
      ]);
      fetchGitHubData(); // Refresh data
    });

    newSocket.on('leetcode-update', (update) => {
      setRealTimeUpdates(prev => [
        { type: 'leetcode', update, timestamp: new Date() },
        ...prev.slice(0, 4)
      ]);
      fetchLeetCodeData(); // Refresh data
    });

    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, [GITHUB_USERNAME]);

  // Initial data fetch and polling setup
  useEffect(() => {
    // Initial fetch
    fetchGitHubData();
    fetchLeetCodeData();

    // Set up polling
    const githubInterval = setInterval(fetchGitHubData, POLL_INTERVAL);
    const leetcodeInterval = setInterval(fetchLeetCodeData, POLL_INTERVAL);

    return () => {
      clearInterval(githubInterval);
      clearInterval(leetcodeInterval);
    };
  }, []);

  // Processed data
  const githubStats = processGitHubData(githubData);

  return (
    <div className="w-full lg:w-2/3 lg:ml-[33.33%] px-10 sm:px-8 lg:px-8 xl:px-12 mt-20">
      
      <h1 style={{ fontFamily: "font2" }} className="text-xl md:text-3xl  font-bold  mb-8 text-gray-800">Developer Activity Dashboard</h1>
      
      {/* Real-time updates banner */}
      {realTimeUpdates.length > 0 && (
        <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 p-4">
          <h3 className="font-bold text-blue-800 mb-2">Recent Activity</h3>
          <div className="space-y-2">
            {realTimeUpdates.map((update, idx) => (
              <div key={idx} className="flex items-start text-sm">
                <span className="mr-2">
                  {update.type === 'github' ? '🔄' : '✍️'}
                </span>
                <span>
                  {update.type === 'github' 
                    ? `New ${update.event.type} in ${update.event.repo?.name || 'repository'}`
                    : `Solved LeetCode ${update.update.problem?.difficulty || 'problem'}`}
                  <span className="text-gray-500 text-xs ml-2">
                    {new Date(update.timestamp).toLocaleTimeString()}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* GitHub Section */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img 
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                alt="GitHub" 
                className="w-10 h-10 mr-3"
              />
              <h2 style={{ fontFamily: "font2" }} className="text-2xl font-semibold text-gray-700">GitHub Activity</h2>
            </div>
            {lastUpdated.github && (
              <span className="text-xs text-gray-500">
                Updated: {lastUpdated.github.toLocaleTimeString()}
              </span>
            )}
          </div>
          
          {loading.github ? (
            <Loader />
          ) : error.github ? (
            <ErrorDisplay message={error.github} />
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <StatCard 
                  title="Recent Pushes" 
                  value={githubStats.pushes} 
                  icon="📌"
                  color="bg-blue-100 text-blue-800"
                  trend={githubStats.pushes > 0 ? 'up' : 'neutral'}
                />
                <StatCard 
                  title="Pull Requests" 
                  value={githubStats.prs} 
                  icon="🔀"
                  color="bg-green-100 text-green-800"
                  trend={githubStats.prs > 0 ? 'up' : 'neutral'}
                />
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Active Repositories</h3>
                <div className="flex flex-wrap gap-2">
                  {githubStats.repos.slice(0, 5).map(repo => (
                    <a
                      key={repo}
                      href={`https://github.com/${repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
                    >
                      {repo.split('/')[1]}
                    </a>
                  ))}
                  {githubStats.repos.length > 5 && (
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      +{githubStats.repos.length - 5} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Contribution Graph</h3>
                <img 
                  src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`} 
                  alt="GitHub Contributions" 
                  className="w-full h-auto"
                />
              </div>
            </>
          )}
          
          <div className="flex justify-between items-center mt-6">
                <a 
                  href={`https://github.com/${GITHUB_USERNAME}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                >
                  View Full Profile
                </a>
                <button 
                  onClick={fetchLeetCodeData}
                  className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                >
                  Refresh Now
                </button>
              </div>
        </div>

        {/* LeetCode Section */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 ">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img 
                src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" 
                alt="LeetCode" 
                className="w-10 h-10 mr-3"
              />
              <h2 style={{ fontFamily: "font2" }} className="text-2xl font-semibold text-gray-700">LeetCode Stats</h2>
            </div>
            {lastUpdated.leetcode && (
              <span className="text-xs text-gray-500">
                Updated: {lastUpdated.leetcode.toLocaleTimeString()}
              </span>
            )}
          </div>
          
          {loading.leetcode ? (
            <Loader />
          ) : error.leetcode ? (
            <ErrorDisplay message={error.leetcode} />
          ) : leetcodeData ? (
            <>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <StatCard 
                  title="Total Solved" 
                  value={leetcodeData.totalSolved} 
                  icon="✅"
                  color="bg-purple-100 text-purple-800"
                />
                <StatCard 
                  title="Acceptance Rate" 
                  value={`${leetcodeData.acceptanceRate}%`} 
                  icon="📈"
                  color="bg-yellow-100 text-yellow-800"
                />
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Problem Breakdown</h3>
                <div className="space-y-3">
                  <ProgressBar 
                    title="Easy" 
                    solved={leetcodeData.easySolved} 
                    total={leetcodeData.totalEasy} 
                    color="bg-green-500"
                  />
                  <ProgressBar 
                    title="Medium" 
                    solved={leetcodeData.mediumSolved} 
                    total={leetcodeData.totalMedium} 
                    color="bg-yellow-500"
                  />
                  <ProgressBar 
                    title="Hard" 
                    solved={leetcodeData.hardSolved} 
                    total={leetcodeData.totalHard} 
                    color="bg-red-500"
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <a 
                  href={`https://leetcode.com/${LEETCODE_USERNAME}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                >
                  View Full Profile
                </a>
                
                <button 
                  onClick={fetchLeetCodeData}
                  className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                >
                  Refresh Now
                </button>
              </div>
            </>
          ) : null}
        </div>

      </div>
    </div>
  );
  
};

// Reusable Components
const Loader = () => (
  <div className="flex justify-center items-center h-32">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const ErrorDisplay = ({ message }) => (
  <div className="p-4 bg-red-50 border-l-4 border-red-500">
    <p className="text-red-600">{message}</p>
    <p className="text-sm text-red-500 mt-1">Please try again later.</p>
  </div>
);

const StatCard = ({ title, value, icon, color, trend }) => (
  <div className={`rounded-lg p-4 ${color}`}>
    <div className="flex justify-between items-start">
      <div className="flex items-center">
        <span className="text-2xl mr-2">{icon}</span>
        <div>
          <p className="text-xs font-medium">{title}</p>
          <p className="text-xl font-bold">{value}</p>
        </div>
      </div>
      {trend === 'up' && <span className="text-green-600">↑</span>}
      {trend === 'down' && <span className="text-red-600">↓</span>}
    </div>
  </div>
);

const ProgressBar = ({ title, solved, total, color }) => {
  const percentage = total > 0 ? Math.round((solved / total) * 100) : 0;
  
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium">{title}</span>
        <span>{solved}/{total} ({percentage}%)</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${color}`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default GitHubLeetCodeWidget;