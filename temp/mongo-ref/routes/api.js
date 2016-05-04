var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use('/users', require('./users'));
router.use('/books', require('./books'));

module.exports = router;
