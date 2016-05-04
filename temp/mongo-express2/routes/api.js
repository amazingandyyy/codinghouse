var express = require('express');
var router = express.Router();

router.use('/trees', require('./trees'));

module.exports = router;
