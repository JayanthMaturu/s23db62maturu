var Book = require('../models/bookSchema');
// List of all Books
exports.book_list = function(req, res) {
res.send('NOT IMPLEMENTED: Book list');
};
// for a specific Book.
exports.book_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};
// Handle Book create on POST.
exports.book_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Book create POST');
};
// Handle Book delete form on DELETE.
exports.book_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Book delete DELETE ' + req.params.id);
};
// Handle Book update form on PUT.
exports.book_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Book update PUT' + req.params.id);
};