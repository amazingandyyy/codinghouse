// this document defines behaviors that interacting with dogs.json
'use strict';

// require libraries
var fs = require('fs');
var uuid = require('uuid');
var path = require('path');

// get the path of data
var dataFile = path.join(__dirname, '../data/dogs.json');
console.log(dataFile);

// Create Dog.findAll()
exports.findAll = function(cb) {
    // cd = callback
    // we want to do this: Dog.findAll(function(err, dogs){}) //this is Snychronous
    // the callbak is "function(err, dogs){}"
    fs.readFile(dataFile, (err, data) => {

        // Asynchronous
        if (err) return cb(err);
        try {
            var dogs = JSON.parse(data);
            console.log('dogs: ', dogs);
            cb(null, dogs);
        } catch (err) {
            return cb(err);
        }


    });
    // then we invoke the callback
}

exports.create = function(dog, cb) {
    // create a new dog and then save it
    if (!dog.name || !dog.kind) {
        return cb("Dog must have name and kind.")
    }
    // read, parse, modify, stringify, write
    this.findAll((err, dogs) => {
        // dogs is paresed from the dogs.json
        if (err) return cb(err);
        var newDog = {
            "name": dog.name,
            "kind": dog.kind,
            "id": uuid()
        }
        dogs.push(newDog);
        fs.writeFile(dataFile, JSON.stringify(dogs), err => {
            cb(err)
        });
    });
};

exports.findById = function(id, cb) {

    this.findAll((err, dogs) => {
        // dogs is paresed from the dogs.json
        if (err) return cb('dogs not founddd!', null);

        // no err when parse the data, then:
        var dog = dogs.filter(dog => dog.id === id)[0];
        if(dog.length ===  dogs.length) {return cb('dog not founddd!', null);}
        cb(null, dog);

    });


}
exports.deleteById = function(id, cb) {

    this.findById((id, dog)=>{
        // no err when parse the data, then:
        dogs = dogs.filter(dog => dog.id !== id);
        if(dogs.length ===  dogs.length) {return cb('nothing changes!', null);}
        cb(null, dog);
    });





}
