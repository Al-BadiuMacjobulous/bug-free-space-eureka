const express = require('express');
const router = express.Router();

// Define your CRUD routes here
router.get('/', (req, res) => {
  res.send('Get all expenses');
});

router.post('/', (req, res) => {
  res.send('Create new expense');
});

// Export the router to use it in server.js
module.exports = router;

