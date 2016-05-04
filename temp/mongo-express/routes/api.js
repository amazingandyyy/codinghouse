'use strict';

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use('/trees', require('./trees'))

module.exports = router;
