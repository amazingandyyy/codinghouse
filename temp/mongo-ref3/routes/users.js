'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.route('/')
    .get((req, res) => {
        User
            .find({})
            .populate('books')
            .exec((err, users) => {
                res.status(err ? 400 : 200).send(err || users);
            });
    })
    .post((req, res) => {
        User.create(req.body, (err, user) => {
            res.status(err ? 400 : 200).send(err || user);
        });
    });

router.route('/:id')
    .get((req, res) => {
        User
            .findById(req.params.id)
            .populate('books friends')
            .exec(res.handle)
    })

router.put('/:user1/addFriend/:user2', (req, res) => {

    User.friendify(req.params.user1, req.params.user2, res.handle)


    // User.findById(req.params.user1, (err1, user1) => {
    //   User.findById(req.params.user2, (err2, user2) => {
    //     if(err1 || err2) return res.status(400).send(err1 || err2);

    //     user1.friends.push(user2._id);
    //     user2.friends.push(user1._id);

    //     user1.save((err1) => {
    //       user2.save((err2) => {
    //         res.status(err1 || err2 ? 400 : 200).send(err1 || err2)
    //       });
    //     });
    //   });
    // });
});


router.put('/:userId/read/:bookId', (req, res) => {
    var userId = req.params.userId;
    var bookId = req.params.bookId;

    User.readBook(userId, bookId, res.handle);
});


router.put('/:userId/books/:bookId', (req, res) => {

    var userId = req.params.userId;
    var bookId = req.params.bookId;

    User.findById(userId, (err, user) => {
        if (err) return res.status(400).send(err);

        user.books.push(bookId);

        user.save((err, savedUser) => {
            res.status(err ? 400 : 200).send(err || savedUser);
        });
    });
});

module.exports = router;
