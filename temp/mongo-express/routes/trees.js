'use strict';

var express = require('express');
var router = express.Router();
var Tree = require('../models/tree')

// GET /api/trees      -->
// POST /api/trees
// PUT /api/trees


router.get('/', (err, res) => {
    Tree.find({}, (err, trees) => {
        if (err) return res.status(400).send('errr: ', err);
        res.send(trees); // always give me an array
    });
});
router.post('/', (req, res) => {
    var tree = new Tree(req.body);
    tree.save((err, savedTree) => {
        if (err) return res.status(400).send('errr: ', err);
        res.send(savedTree);
    });
});
router.get('/:id', (req, res) => {
    var treeId = req.params.id;
    Tree.findById(treeId, (err, tree) => {
        if (err) return res.status(400).send('errr: ', err);
        res.send(tree); // always give me an object
    });
});
router.put('/:id', (req, res) => {
    var treeId = req.params.id;
    var updateInfo = req.body;
    Tree.findByIdAndUpdate(treeId, {$set: updateInfo}, (err, tree) => {
        if (err) return res.status(400).send('errr: ', err);
        res.send(tree); // always give me an object
    });
});
router.delete('/:id', (req, res) => {
    var treeId = req.params.id;
    Tree.findByIdAndRemove(treeId, (err) => {
        if (err) return res.status(400).send('errr: ', err);
        res.send(); // always give me an object
    });
});

module.exports = router;
