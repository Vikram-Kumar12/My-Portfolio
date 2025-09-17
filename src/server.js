// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const axios = require('axios');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000" // Your frontend URL
  }
});

// Track connected users
const users = new Map();

io.on('connection', (socket) => {
  // console.log('New client connected');
  
  // Handle GitHub username registration
  socket.on('register', (username) => {
    users.set(socket.id, username);
    // console.log(`User ${username} registered`);
  });
  
  // Handle disconnection
  socket.on('disconnect', () => {
    users.delete(socket.id);
    console.log('Client disconnected');
  });
});

// GitHub webhook endpoint
app.post('/github-webhook', (req, res) => {
  const event = req.headers['x-github-event'];
  const payload = req.body;
  
  // Broadcast to all sockets for this user
  io.emit('github-event', {
    type: event,
    repo: payload.repository,
    sender: payload.sender
  });
  
  res.status(200).send('OK');
});

// LeetCode polling endpoint
const pollLeetCode = async (username) => {
  try {
    await axios.get(`https://leetcode.com/${username}/`);
    // Parse HTML to get recent submissions
    // This would require HTML parsing logic
  } catch (error) {
    // console.error('LeetCode polling error:', error);
  }
};

server.listen(4000, () => {
  // console.log('Server running on port 4000');
  // Start polling for each user periodically
  setInterval(() => {
    users.forEach((username, socketId) => {
      pollLeetCode(username);
    });
  }, 300000); // 5 minutes
});