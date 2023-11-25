const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
    book_name:  {
        type: String,
        required: true
    },
    book_author:  {
        type: String,
        required: true
    },
    book_cost: {
        type: Number,
        min: 5,
        max: 50
    } 
})
module.exports = mongoose.model("book",
bookSchema)