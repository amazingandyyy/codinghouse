'use strict';

var app = angular.module('todoApp');

app.controller('mainCtrl', function($scope, Todo) {
    Todo.getAll()
        .then(function(res) {
            console.log('res: ', res);
            $scope.todos = res.data;
        })
        .catch(function(err) {
            console.error('err: ', err);
        })

    $scope.createTodo = ()=> {
        Todo.create($scope.newTodo)
            .then(function(res) {
                console.log(res);
                $scope.todos.push(res.data);
            })
            .catch(function(err) {
                console.error('err: ', err);
            })
    }
    $scope.removeTodo = (todo)=> {
        Todo.remove(todo)
            .then(function() {
                var index = $scope.todos.indexOf(todo);
                $scope.todos.splice(index, 1);
            })
            .catch(function(err) {
                console.error('err: ', err);
            })
    }
    $scope.doneToggle = (todo)=> {
        Todo.done(todo)
            .then(function() {
                return true;
            })
            .catch(function(err) {
                console.error('err: ', err);
            })
    }


})
