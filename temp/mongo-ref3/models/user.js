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
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});


userSchema.statics.readBook = function(userId, bookId, cb) {

    // find the user by id
    // get the book out of the user by the bookId
    // call book.read()
    // callback

    User.findById(userId, (err, user) => {
        if (err) return cb(err);

        var book = user.books.filter(book => book._id.toString() === bookId)[0];

        if (!book) {
            return cb({
                error: 'Book not found'
            });
        }

        book.read(cb);

    }).populate('books');

};
userSchema.statics.friendify = function(userId1, userId2, cb) {
    User.findById(userId1, (err1, user1) => {
        User.findById(userId2, (err2, user2) => {
            if (err1 || err2) return cb(err1 || err2);

            var user1HasFriend = user1.friends.indexOf(user2._id) !== -1;
            var user2HasFriend = user2.friends.indexOf(user1._id) !== -1;
            if(user1HasFriend || user2HasFriend){
                return cb();
            }
            user1.friends.push(user2._id);
            user2.friends.push(user1._id);

            user1.save((err1) => {
                user2.save((err2) => {
                    cb(err1 || err2)
                });
            });

        });
    });
};





var User = mongoose.model('User', userSchema);

module.exports = User;
