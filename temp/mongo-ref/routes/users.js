var express = require('express');
var router = express.Router();


var User = require('../models/user')


/* GET users listing. */
router.route('/')
    .get((req, res) => {
        User
            .find({})
            .populate('books') // the filed in userSchema
            .exec((err, users) => {
                res.status(err ? 400 : 200).send(err || users)
            })
    })
    .post((req, res) => {
        // http://mongoosejs.com/docs/models.html -->search(Tank.create)
        User.create(req.body, (err, user) => {
            res.status(err ? 400 : 200).send(err || user)
        })
    })
router.route('/:userId/books/:bookId')
    .put((req, res) => {
        var userId = req.params.userId;
        var bookId = req.params.bookId;
        User.findById(userId, (err, user) => {
            if (err) return res.status(400).send(err);
            // res.status(err ? 400:200).send(err? err:null);
            user.books.push(bookId);

            user.save((err, user) => {
                res.status(err ? 400 : 200).send(err || user)
            })
        })
    })
router.route('/:userId/read/:bookId')
    .put((req, res) => {
        var userId = req.params.userId;
        var bookId = req.params.bookId;

        User.populate('books').findById(userId, (err, user) => {
            if (err) return res.status(400).send(err);
            var book = user.books.filter(book => book._id.toString() === bookId)[0];
            if (!book) {
                return res.status(400).send({
                    err: 'Book not found'
                });
            }
            book.readCount++;
            book.save((err) => {
                res.status(err ? 400 : 200).send(err);
            })
        });
    });




module.exports = router;
