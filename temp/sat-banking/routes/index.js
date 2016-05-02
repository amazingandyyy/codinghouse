'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/transactions', require('./transactions'));

module.exports = router;
