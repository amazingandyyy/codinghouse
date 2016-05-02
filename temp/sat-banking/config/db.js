'use strict';

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'amazingandyyyM1!',
  database : 'banking'
});

connection.connect();


module.exports = connection;
