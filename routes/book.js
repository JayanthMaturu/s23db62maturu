var express = require('express');
const book_controlers= require('../controllers/book');
var router = express.Router();

/* GET home page. */
router.get('/',book_controlers.book_view_all_Page);

module.exports = router;
