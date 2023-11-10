var Book = require('../models/bookSchema');

// List of all Books
exports.book_list = async function (req, res) {
    try {
        theBooks = await Book.find();
        res.send(theBooks);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Book create on POST.
exports.book_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Book();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.book_name = req.body.book_name;
    document.book_author = req.body.book_author;
    document.book_cost = req.body.book_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};


// VIEWS
// Handle a show all view
exports.book_view_all_Page = async function(req, res) {
    try{
    theBooks = await Book.find();
    res.render('books', { title: 'Book Search Results', results: theBooks });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};

// for a specific Book.
exports.book_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Book.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Book delete form on DELETE.
exports.book_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Book delete DELETE ' + req.params.id);
};
// Handle Book update form on PUT.
exports.book_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Book update PUT' + req.params.id);
};