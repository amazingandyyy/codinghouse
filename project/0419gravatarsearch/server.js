'use strict';

const PORT = 4000;

var http = require('http');
var fs = require('fs');
var md5 = require('md5');

var server = http.createServer((req, res) => {
  console.log('req: ',req);

  var params = req.url.split('/');
  console.log('params: ',params);
  params.shift(); // throw away the empty first object
  var resource = params.shift().toLowerCase();

  console.log('resource: ',resource);


    switch (resource) {
        case 'gravatar': require('./gravatar')(params, res); break;
        case 'sentence': require('./sentence')(params, res); break;
        case 'math': require('./math')(params, res); break;
        case 'age': require('./age')(params, res); break;
        case '':
            var data = fs.readFileSync('./public/index.html');
            res.end(data.toString());
            break;
        default:
            fs.readFile(`./public/${resource}`, (err,data) => {
              if(err){
                res.statusCode = 404;
                console.error(err);
                res.write(`Not Found the document of ${resource}!`);
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
