const express = require('express');

const router = express.Router();

// Home/Dashboard Page
router.get('/', (req,res) => res.render('welcome'));


module.exports = router;