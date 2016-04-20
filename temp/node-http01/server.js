'use strict';
const PORT = 3000;

var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {

    var urlArr = req.url.split('/');
    urlArr.shift();
    var task = urlArr.shift();
    // this is a so-called rout!
    switch (task) {
        case 'square':
            var num = urlArr[0];
            var result = Math.pow(num, 2); // pow will parse it.
            res.write(`${result}`)
            break;
        case 'cube':
            var num = urlArr[0];
            var result = Math.pow(num, 3); // pow will parse it.
            res.write(`${result}`);
            break;
        case 'pow':
            var num = urlArr.shift();
            var pow = urlArr.shift();
            var result = Math.pow(num, pow); // pow will parse it.
            res.write(`${result}`);
            break;
        case 'sum':
            var result = urlArr.reduce((a, b) => {
                return a + Number(b);
            }, 0);
            res.write(`${result}`);
            break;
        default:
            var result = 'Defaultttttt'; // pow will parse it.
    }
    res.end('\n');
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
