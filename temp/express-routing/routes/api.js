'use strict';

var express = require('express');
var router = express.Router();

// var Clog = require('../modules/clog');
// clogs router
//
// root/clogs/...

    router.get('/', (req, res) => {
        res.send('api\n');
    });

    router.use('/clogs', require('./clogs'));



module.exports = router;
