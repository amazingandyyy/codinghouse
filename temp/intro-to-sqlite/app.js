'use strict';


var sqlite3 = require('sqlite3').verbose();
var time = Date.now();
var db = new sqlite3.Database(`./database_${time}.db`)

db.serialize(function() {
  db.run("CREATE TABLE timestamps (time INTEGER)");

  var time = Date.now();

  db.run(`INSERT INTO timestamps VALUES (${time})`);


  // var stmt = db.prepare("INSERT INTO timestamps VALUES (? ,? ,?)");
  //
  // stmt.run('lexus', 'RX330', 2004);
  // stmt.run('aa', 'RX330', 2005);
  // stmt.run('ff', 'RX330', 2006);



  // for (var i = 0; i < 10; i++) {
  //     stmt.run("dd " + i);
  // }
  // stmt.finalize();

  // db.each("SELECT rowid AS id, info FROM cars", function(err, row) {
  //     console.log(row.id + ": " + row.info);
  // });

  var make = 'lexus'
  db.each(`SELECT * FROM timestamps`, function(err, row) {
      console.log(row);
  });
});


db.close();
