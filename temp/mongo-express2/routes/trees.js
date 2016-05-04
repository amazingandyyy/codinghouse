'use strict';

var express = require('express');
var router = express.Router();

var Tree = require('../models/tree');


router.route('/')
    .get((req, res) => {


        // .find()      {} --> find all, {age:{$lt: 30} -- get all that have a agoe of less than 30
        // .sort()      sort the result
        // .limit()     limit the number of result
        // .select()    limit the select field...

        var sort = req.query.sort;
        // delete -->  remove a key of object
        delete req.query.sort;

        var sort = req.query.sort;
        delete req.query.sort;

        var limit = parseInt(req.query.limit);
        delete req.query.limit;

        var select = {};
        for(var key in req.query){
            select[key] = parseInt(req.query[key])
        };

        // http://localhost:8000/api/trees?species=one
        var select = req.query;


        Tree
            .find({})
            // .find({age: 23})
            // .find({age: {$lt: 30}})
            // .limit(3)
            .limit(limit)
            // .sort({age: 1})
            .sort(sort)

            // http://localhost:8000/api/trees?sort=-age&limit=4
            // .limit(parseInt(req.query.limit))
            // .sort(req.query.sort)
            // .select({
            //     age: 1,
            //     species: 1,
            //     // _id: 0
            // })
            .select(select)
            .exec((err, trees) => {
                res.status(err ? 400 : 200).send(err || trees);
            });



    })
    .post((req, res) => {
        var tree = new Tree(req.body);

        console.log('tree:', tree);

        tree.save((err, savedTree) => {
            res.status(err ? 400 : 200).send(err || savedTree);
        });
    })

router.route('/:id')
    .get((req, res) => {
        Tree.findById(req.params.id, (err, tree) => {
            res.status(err ? 400 : 200).send(err || tree);
        });
    })
    .delete((req, res) => {
        Tree.findByIdAndRemove(req.params.id, (err, tree) => {
            res.status(err ? 400 : 200).send(err);
        });
    })
    .put((req, res) => {
        Tree.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        }, (err, tree) => {
            res.status(err ? 400 : 200).send(err || tree);
        });
    })

router.route('/:id/creatures')
    .put((req, res) => {
        var newCreature = req.body.creature;
        var treeId = req.params.id;
        Tree.findOne({
            "_id": treeId
        }, function(err, tree) {
            tree.creatures.push(newCreature);
            tree.save((err, savedTree) => {
                res.status(err ? 400 : 200).send(err || savedTree);
            });
        });
    });


module.exports = router;
