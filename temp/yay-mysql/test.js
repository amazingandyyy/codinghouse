'use strict';

var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'amazingandyyyM1!',
    database: 'testdb'
});

db.connect();


// db.query('INSERT INTO users (username) VALUES (?)', 'bob',
//     function(err, two) {
//         console.log(err, two);
//     });
// db.query('INSERT INTO messages (body, sender, receipient) VALUES ("ppp",2,4)',
//     function(err, two) {
//         console.log(err, two);
//     });
db.query('INSERT INTO messages (body, sender, receipient) VALUES ("ppp",2,4)',
    function(err, two) {
        console.log(err, two);
    });




// // initialize
// db.query(`CREATE TABLE users (
//             id int PRIMARY KEY AUTO_INCREMENT,
//             username TEXT
//         )`);
// db.query(`CREATE TABLE messages (
//             id INTEGER PRIMARY KEY AUTO_INCREMENT,
//             body TEXT,
//             sender INTEGER,
//             receipient INTEGER
//         )`);

//


db.end();
