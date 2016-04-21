'use strict'
const PORT = process.env.PORT || 8000;

let jade = require('jade');
let http = require('http');
let qs = require('qs');

let nodeStatic = require('node-static');
let file = new nodeStatic.Server('./public');

http.createServer((req, res) => {

      let html;
      let qsParts = req.url.split('?');
      let path = qsParts[0];
      var theme;
      if(qsParts[1]){
        var query = qs.parse(qsParts[1]);
        theme = query['theme'];
      }

      console.log('path: ', path);
      console.log('theme: ', theme);
      console.log('query: ', query);



        switch (path) {
            case '/': {
                 html = jade.renderFile('./views/index.jade', {
                  title: "Jade-App",
                  theme: theme
                })
                res.end(html);
                break;
              }
            case '/contact': {
                 html = jade.renderFile('./views/contact.jade', {
                  active: "active",
                  title: "Contact",
                  theme: theme
                })
                res.end(html);
                break;
              }
        }

        file.serve(req, res);
        // compare to fs
        // var fs = require('fs');
        // fs.readFile(`./public/${resource}`, (err,data) => {
        //             if(err){
        //               res.statusCode = 404;
        //               console.error(err);
        //               res.write(`Not Found the document of ${resource}!`);
        //               res.end('\n');
        //             }else{ // file found.
        //               res.end(data.toString());
        //             }
        //           });
        //
        // var nodeStatic = require('node-static');
        // file.serve(req,res);

    })
    .listen(PORT, err => {
        if (err) return console.log('err: ', err);
        console.log(`Node Server listening on portttt ${PORT}`);
    });
