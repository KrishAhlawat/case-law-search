const express = require('express');
const router = express.Router();
const CASE_LAWS = require('../data/caseLaws');

// POST /api/search - Search case laws by keyword
router.post('/search', (req, res) => {
  try {
    // Extract keyword from request body
    const { keyword } = req.body;

    // Validate input - keyword must be provided
    if (!keyword || keyword.trim() === '') {
      return res.status(400).json({ error: 'Keyword is required' });
    }

    // Convert keyword to lowercase for case-insensitive matching
    const searchKeyword = keyword.toLowerCase().trim();

    // Filter case laws that contain the keyword in their keywords array
    const results = CASE_LAWS.filter(caseLaw => 
      caseLaw.keywords.some(kw => kw.toLowerCase().includes(searchKeyword))
    );

    // Return filtered results (empty array if no matches)
    res.json(results);

  } catch (error) {
    // Handle any unexpected errors
    console.error('Search error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
