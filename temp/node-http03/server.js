'use strict';

const PORT = 8000;

var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {

  var params = req.url.split('/');
  params.shift(); // throw away the empty first object
  var resource = params.shift().toLowerCase();

    switch (resource) {
        case 'math': require('./math')(params, res); break;
        case 'str': require('./str')(req, res, params); break;
        case '':
            var data = fs.readFileSync('./public/index.html');
            res.end(data.toString());
            break;
        default:
            fs.readFile(`./public/${resource}`, (err,data) => {
              if(err){
                res.statusCode = 404;
                console.error(err);
                res.write('Not Foundddd!');
                res.end('\n');
              }else{ // file found.
                res.end(data.toString());

              }
            });

    }
});

server.listen(PORT, function(err) {
    if (err) return console.log('err:', err);
    console.log(`Node server listening on portttt ${PORT}`);
});


//  localhost: 3000/str/upperCase/banana
