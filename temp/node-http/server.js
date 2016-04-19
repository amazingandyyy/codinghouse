'use strict';
const PORT = 3000;

var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {

    var urlArr = req.url.split('/');
    urlArr.shift();
    var task = urlArr.shift();
var result;
    // this is a so-called rout!
    switch (task) {
        case 'square':
            var num = urlArr[0];
            result = Math.pow(num, 2); // pow will parse it.
            break;
        case 'cube':
            var num = urlArr[0];
            result = Math.pow(num, 3); // pow will parse it.
            break;
        case 'pow':
            var num = urlArr.shift();
            var pow = urlArr.shift();
            result = Math.pow(num, pow); // pow will parse it.

            break;
        default:
            result = 'Defaultttttt'; // pow will parse it.
    }

    res.end(`${result}\n`);
    // var num = Number(urArr.shift());
    // var result;
    // if (task == 'square') {
    //     if (num) {
    //         result = (num * num).toString();
    //     } else {
    //         result = 'No number';
    //     }
    // } else {
    //     result = 'What do you mean?';
    // }

    // console.log('url: ', req.url);
    // console.log('method: ', req.method);
    // console.log('headers ', req.headers);
    //
    // // you can only have one res.end();
    // res.end(`${result}\n`);

});

server.listen(PORT, function(err) {
    if (err) return console.log('err:', err);
    console.log(`Node server listening on port ${PORT}`);
});
