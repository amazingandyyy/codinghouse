'use strict';

var app = angular.module('todoApp');

// all services and factories

app.service('Todo', function($http) {
    // manage all todo api calls
    this.getAll = () => {
        return $http.get('/api/todos')

    }
    this.create = (todo) => {
        return $http.post('/api/todos', todo);
    }
    this.remove = (todo) => {
        return $http.delete(`/api/todos/${todo.id}`);
    }
    this.done = (todo) => {
        return $http.put(`/api/todos/${todo.id}/toggle`);
    }


});
