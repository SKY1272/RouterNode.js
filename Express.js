// Import required modules
const express = require('express');
const app = express();

// Import routers
const adminRouter = require('./adminRouter');
const shopRouter = require('./shopRouter');

// Use routers
app.use('/admin', adminRouter);
app.use('/shop', shopRouter);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
