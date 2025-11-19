// Import required modules
const express = require('express');
const cors = require('cors');
const searchRoutes = require('./routes/search');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Mount search routes
app.use('/api', searchRoutes);

// Basic health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Case Law Search API is running' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
