'use strict';

const PORT = 3000;

var http = require('http');

var server = http.createServer((req, res) => {
    var params = req.url.split('/');
    params.shift();
    var task = params.shift().toLowerCase();
    console.log(task);

    switch (task) {
        case 'math':
            require('./math')(params, res);
            break;
        case 'str':
            require('./str')(req, res, params);
            break;

        default:
            res.statusCode = 404;
            console.error('What do you mena????');
            res.write('Not Foundddd!');
            res.end('\n');
    }
});

server.listen(PORT, function(err) {
    if (err) return console.log('err:', err);
    console.log(`Node server listening on port ${PORT}`);
});


//  localhost: 3000/str/upperCase/banana
