'use strict';

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
});

// User.readBook
userSchema.statics.readBook = function(userId, bookId, cb) {
    // find the user by id
    // get the book out of the user by the bookId
    // call book.read()
    // callback

    this.findById(userId, (err, user) => {
        // this is refering ro model itself, it's the "User"
        if (err) return res.status(400).send(err);
        var book = user.books.filter(book => book._id.toString() === bookId)[0];
        if (!book) {
            return cb({err: 'Book not found'});
        }
        book.read(cb);
    }).populate('books');
}


var User = mongoose.model('User', userSchema);


module.exports = User;
