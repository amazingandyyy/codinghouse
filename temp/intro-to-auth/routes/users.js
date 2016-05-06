var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.route('/')
    .get((req, res) => {
        User.find({}, (err, users) => {
            res.status(err ? 400 : 200).send(err || users);
        })
    })

router.route('/create')
    .post((req, res) => {
        User.create(req.body, (err) => {
            res.status(err ? 400 : 200).send(err);
        })
    })
router.route('/login')
    .post((req, res) => {
        User.auth(req.body, (err) => {
            res.status(err ? 400 : 200).send(err);
        })
    })

router.route('/delete/:id')
    .delete((req, res) => {
        User.delete(req.params, (err) => {
            res.status(err ? 400 : 200).send(err);
        })
    })



module.exports = router;
