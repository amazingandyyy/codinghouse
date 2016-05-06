var express = require('express');
var router = express.Router();

router.use('/users', require('./users'));
router.use('/books', require('./books'));

module.exports = router;
