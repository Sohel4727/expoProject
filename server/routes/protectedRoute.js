// Example protected route using authMiddleware
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/protected', authMiddleware, (req, res) => {
  // Your protected route logic here
});

module.exports = router;
