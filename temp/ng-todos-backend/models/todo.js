'use strict';

var db = require('../config/db');
var moment = require('moment');

db.run(`CREATE TABLE IF NOT EXISTS todos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          createdAt DATETIME,
          dueDate DATETIME,
          desc TEXT,
          isComplete BOOLEAN DEFAULT 0
        )`);

exports.get = function(cb) {
  db.all('SELECT * FROM todos', cb);
};

exports.getOneById = function(id, cb) {
  db.get('SELECT * FROM todos WHERE id = ?', id, cb);
};

exports.removeById = function(id, cb) {
  db.run('DELETE FROM todos WHERE id = ?', id, cb);
};

exports.create = function(todo, cb) {
  if(!todo.dueDate || !todo.desc) {
    return cb('Missing required field.')
  }

  var createdAt = moment().valueOf();
  var dueDate = moment(todo.dueDate).valueOf();

  db.run('INSERT INTO todos (createdAt, dueDate, desc) VALUES (?, ?, ?)', createdAt, dueDate, todo.desc,
    (err) => {
      if(err) return cb(err);

      db.get(`SELECT *
              FROM    todos
              WHERE   ID = (SELECT MAX(ID)  FROM todos);`, cb)
    });
};

exports.toggle = function(id, cb) {
  this.getOneById(id, (err, todo) => {
    if(err) return cb(err);

    var newValue = todo.isComplete ? 0 : 1;

    db.run("UPDATE todos SET isComplete = ? WHERE id = ?", newValue, id, (err) => {
      if(err) return cb(err);
      cb(null, newValue);
    });
  });
};
