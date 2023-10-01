const { blogStats, blogSearch } = require('../controllers/blogStats.controller');

//Router
const router = require('express').Router();

//!Routes
router.get('/blog-stats',blogStats);
router.get('/blog-search',blogSearch);

//Exports
module.exports = router;