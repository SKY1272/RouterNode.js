const express = require('express');
const adminRouter = express.Router();

// Define admin routes
adminRouter.get('/', (req, res) => {
  res.send('Admin Dashboard');
});

adminRouter.get('/users', (req, res) => {
  res.send('List of users');
});

// Add more admin routes as needed

module.exports = adminRouter;
