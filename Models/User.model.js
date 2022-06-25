const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  name : String,
  Books : [
    {
        ref : 'Book',
        type : mongoose.Schema.Types.ObjectId
    }
  ]
})

const User = mongoose.model('User', userSchema);


module.exports = User