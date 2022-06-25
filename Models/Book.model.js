const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
  title : String,
  price : Number,
  reviews : [{
    type : String,
    userId : {
            ref : "User",
            type : mongoose.Schema.Types.ObjectId
        }
  }]
})

const Book = mongoose.model('Book', bookSchema);


module.exports = Book 