const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
    book_name: String,
    book_author: String,
    book_cost: Number
})
module.exports = mongoose.model("book",
bookSchema)