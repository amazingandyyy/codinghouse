'use strict';

var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    readCount: {
        type: Number, default: 0
    }
});

var Book = mongoose.model('Book', bookSchema);


module.exports = Book;
