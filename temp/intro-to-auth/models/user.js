'use strict';

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

userSchema.static.create = function(newUser, cb) {
    // 'this' is this User model itself
    this.create(newUser, cb);
};
userSchema.static.authenticate = function(userObj, cb) {
    // find the user by the username
    // confirm the password
    // create a token

    var username = userObj.username;
    var password = userObj.password;

    this.findOne({
        username: username
    }, (err, user) => {
        if (err || !user || user.password !== password) return cb(err || {
            error: 'Username or password is wrong.'
        });
        var token = user.makeToken();
    });
};
userSchema.methods.makeToken = function(){

    jwt.sign()

};

// userSchema.static.auth = function(userId, cb){
//     this.create(newUser, cb);
// }
// userSchema.static.delete = function(userId, cb){
//     this.delete(userId, cb);
// }

var User = mongoose.model('User', userSchema);

module.exports = User;
