const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
    book_name: String,
    book_author: String,
    book_cost: {
        type: Number,
        min: 5,
        max: 50
    } 
})
module.exports = mongoose.model("book",
bookSchema)