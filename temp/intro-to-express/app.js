'use strict';



const PORT = process.env.PORT || 8000;

var express = require('express');
var fs = require('fs');
var morgan = require('morgan');

var app = express();

//app.use use a middileway function!!!
app.use(morgan('common'));


app.use((req, res, next) => {
    console.log("fdsfdsfsdfdsfdsf");
    res.set('ANDYHEADER', 'ANDYYYYYYYYYY');
    next();
})

// open to everyone
app.get('/',(req, res, next) => {
    console.log('req.method: ', req.method);
    console.log('req.query: ', req.query);
    res.send(['OK!!']);
});

//have to do auth
app.get('/secret', (req, res, next) => {
    // console.log('req: ',req);
    res.send(['This is Andy\'s secret :))']);
});

//same
app.use(error404);
function error404(req, res, next){
    res.status(404).send('dfadsfds');
};
// app.use((req, res, next)=>{
//     res.status(404).send('dfadsfds');
// });
// -->

function Authhh(req, res, next) {
    if (req.query.password !== 'andy') {
        res.status(401).send({
            guard: 'WHO ARE YOU???'
        })
    } else {
        next();
    }
};

app.listen(PORT, err => {
    console.log(err || `Server lisitening on portttt ${PORT}`);
});
// old way
// var http= require('http')
//
// http.createServer(app)
// .listen(PORT, err => {
//    console.log(err || `Server lisitening on portttt ${PORT}`);
// })
