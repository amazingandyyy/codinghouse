'use strict';

const PORT = process.env.PORT || 8000;

// require libraries
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var uuid = require('uuid');
// var jade = require('jade');  we don't need to require jade here

// require my dog modules
var Message = require('./modules/message');

// add declaration
var app = express();

//app.use use a middileway function!!!
// use morgan
app.use(morgan('common'));
// body parser give req a new key
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.set('view engine', 'jade');

// rout
app.route('/board/message')
    // .get((req, res, next) => {
    //     // get dogs
    //     Message.findAll((err, dogs) => {
    //         // if (err) {
    //         //     return res.status(400).send(err)
    //         // };
    //         // res.send(dogs); //same as res.send
    //         res.status(err ? 400 : 200).send(err || dogs);
    //     });
    //
    // })
    // add new dog
    .post(validate, (req, res, next) => {
        var message = req.body;
        //  req.body = ~ {name = 'nammeee', kind='kindname'}
        Message.create(message, (err) => {
            // if (err) return res.status(400).send(err);
            // res.send()
            res.status(err ? 400 : 200).send(err || dog);
        });
    })
app.route('/api/dogs/:id')
    // get a dog
    .get((req, res, next) => {
        var id = req.params.id; //string

        Dog.findById(id, (err, dog) => {
            res.status(err ? 400 : 200).send(err || dog);
        });

    })
    .delete((req, res, next) => {
        var id = req.params.id; //string

        Dog.deleteById(id, (err, dog) => {
            res.status(err ? 400 : 200).send(err || dog);
        });

        // console.log('dogs after deleting: ', dogs);

        // res.send('dogs: ', dogs);

    })


function validate(req, res, next) {
    if (!req.body.name || !req.body.kind) {
        return res.status(400).send('Key is incorrect or missing');
    }
    next();
}
// same the as AJAX Req
app.get('/', (req, res, next) => {
    res.render('home');
});
app.get('/board', (req, res, next) => {
    res.render('board');
});


//  404 handler
app.use((req, res, next) => {
    res.status(404).send("NOT DOUNDDDD")
})


// create the server
app.listen(PORT, err => {
    console.log(err || `Server lisitening on portttt ${PORT}`);
});
