'use strict';

var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  readCount: { type: Number, default: 0 }
});


//  schema.methods.methodName  -->  instance / document method
//
//   book.read( /* someCallback */ )



bookSchema.methods.read = function(cb) {
  this.readCount++;
  this.save(cb);
};

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;
