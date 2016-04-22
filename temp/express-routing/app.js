'use strict';
const PORT = process.env.PORT || 8000;
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('GET ////');
});

app.get('/api/clogs', (req,res)=> {
    res.send('clogggggsss\n')
});

// app.use('/clogs', require('./routes/clogs'));
app.use('/api', require('./routes/api'));






app.listen(PORT, err => {
    console.log(err || `Server listening on port ${PORT}`);

});
