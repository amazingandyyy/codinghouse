'use strict';
const PORT = 3000;

var http = require('http');

var server = http.createServer((req, res) => {
    var params = req.url.split('/');
    params.shift();
    var task = params.shift();

    switch (task) {
        case 'math':
            require('./math')(params, res); break;
        default:
            var result = 'Defaultttttt'; // pow will parse it.
            res.write(`${result}`);
            res.end('\n');
    }
});

server.listen(PORT, function(err) {
    if (err) return console.log('err:', err);
    console.log(`Node server listening on port ${PORT}`);
});
