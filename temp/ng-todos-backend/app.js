'use strict';

const PORT = process.env.PORT || 8000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs')

app.use('/api', require('./routes/api'));
app.use('/', require('./routes/index'))

app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});
