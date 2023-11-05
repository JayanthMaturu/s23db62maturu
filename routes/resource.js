var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var book_controller = require('../controllers/book');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Book ROUTES ///
// POST request for creating a Book.
router.post('/books', book_controller.book_create_post);
// DELETE request to delete books.
router.delete('/books/:id', book_controller.book_delete);
// PUT request to update books.
router.put('/books/:id', book_controller.book_update_put);
// GET request for one books.
router.get('/books/:id', book_controller.book_detail);
// GET request for list of all books items.
router.get('/books', book_controller.book_list);
module.exports = router;