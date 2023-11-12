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
exports.book_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Book.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

// Handle Book update form on PUT.

exports.book_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
    let toUpdate = await Book.findById( req.params.id)
    // Do updates of properties
    if(req.body.book_name)
        toUpdate.book_name = req.body.book_name;
    if(req.body.book_author) 
        toUpdate.book_author = req.body.book_author;
    if(req.body.book_cost) 
        toUpdate.book_cost = req.body.book_cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// Handle a show one view with id specified by query
exports.book_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        let result = await Book.findById(req.query.id)
        res.render('bookdetail',
            { title: 'Book Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};