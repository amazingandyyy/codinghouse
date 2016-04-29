'use strict';

var express = require('express');
var router = express.Router();

var Todo = require('../models/todo');

//   /api/todos
router.route('/')
  .get((req, res) => {

    Todo.get((err, todos) => {
      if(err) {
        return res.status(400).send(err);
      }

      res.send(todos);
    });
  })
  .post((req, res) => {
    // req.body  -->  { desc: ??, dueDate: ?? }
    Todo.create(req.body, (err, newTodo) => {
      if(err) {
        return res.status(400).send(err);
      }
      res.send(newTodo);
    });
  });

router.put('/:id/toggle', (req, res) => {
  Todo.toggle(req.params.id, (err, newValue) => {
    if(err) {
      return res.status(400).send(err);
    }
    res.send({newValue: newValue});
  });
});

router.delete('/:id', (req, res) => {
  Todo.removeById(req.params.id, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

module.exports = router;
