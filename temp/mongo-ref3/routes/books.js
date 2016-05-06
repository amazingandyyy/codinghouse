'use strict';

var express = require('express');
var router = express.Router();

var Book = require('../models/book');

router.route('/')
  .get((req, res) => {
    Book.find({}, (err, books) => {
      res.status(err ? 400 : 200).send(err || books);
    });
  })
  .post((req, res) => {
    Book.create(req.body, (err, book) => {
      res.status(err ? 400 : 200).send(err || book);
    });
  });

module.exports = router;
