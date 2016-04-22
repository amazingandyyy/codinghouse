'use strict';

var express = require('express');
var router = express.Router();

// var Clog = require('../modules/clog');
// clogs router
//
// root/clogs/...
var clogs = ['clog1', 'clog2'];


    router.get('/', (req, res) => {
        res.send(clogs);
    });
    router.get('/fancy', (req, res) => {
        res.send('fancy clogsss\n');
    });



module.exports = router;
