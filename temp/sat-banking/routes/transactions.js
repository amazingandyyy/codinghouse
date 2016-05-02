'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

var Transaction = require('../models/transaction');

router.get('/', (req, res) => {
    Transaction.getAll((err, transactions) => {
        if (err) return res.status(400).send(err);
        res.send(transactions)
    })
});
router.post('/', (req, res) => {
    Transaction.create(req.body, err => {
        if (err) return res.status(400).send(err);
        res.send(transaction)
    })
});

module.exports = router;
