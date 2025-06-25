import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Right Content - Scrollable */}
      <div className="w-full lg:w-2/3 lg:ml-[33.33%] px-4 sm:px-8 lg:p-8 xl:p-12 mb-10 ">
        <div className="px-4 sm:px-6 transition-all duration-300">
          {/* Short About */}
          <p className="text-gray-700 mb-4 text-base sm:text-medium">
            Hello! I'm Vikram Kumar, a Full-Stack Developer with expertise in
            both Frontend and Backend technologies. I have a strong foundation
            in HTML, CSS, JavaScript, Tailwind CSS, React.js, along with backend
            skills in Node.js, Express.js, MongoDB and PostgreSQL. Currently
            pursuing my Bachelor of Computer Applications (BCA), I combine
            academic knowledge with real-world project experience to build
            responsive, scalable, and efficient web applications.
          </p>

          {/* Expanded About */}
          {isExpanded && (
            <div className="space-y-4 animate-fadeIn">
              <p className="text-gray-700 text-base sm:text-medium">
                I've built several projects ranging from responsive LettLab
                Website (inspired from LeetCode), Portfolio Websites, Movie Web
                App, Car Solution, School Website and to clone applications
                like ExoApp. I've also actively solved over 200+ coding problems
                on LeetCode and 60+ on GeeksforGeeks, continuously sharpening my
                problem-solving and algorithmic thinking.
              </p>
              <p className="text-gray-700 text-base sm:text-medium">
                I'm also an active participant in hackathons, academic projects,
                and coding contests, always looking for opportunities to learn,
                collaborate, and innovate. Whether working on a personal project
                or contributing to a team, I always bring a positive attitude,
                attention to detail, and eagerness to grow.
              </p>
            </div>
          )}

          {/* Toggle Text */}
          <span
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-indigo-600 hover:text-indigo-800 font-medium mt-2 cursor-pointer inline-block text-base sm:text-medium"
          >
            {isExpanded ? "read less" : "read more..."}
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default About;
