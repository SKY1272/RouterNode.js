const express = require('express');
const shopRouter = express.Router();

// Define shop routes
shopRouter.get('/', (req, res) => {
  res.send('Shop Homepage');
});

shopRouter.get('/products', (req, res) => {
  res.send('List of products');
});

// Add more shop routes as needed

module.exports = shopRouter;
