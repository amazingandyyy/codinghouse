'use strict'
const PORT = process.env.PORT || 8000;

const jade = require('jade');
const http = require('http');
const qs = require('qs');


let nodeStatic = require('node-static');
let file = new nodeStatic.Server('./public');

http.createServer((req, res) => {
        // console.log('req: ', req);
        let html;
      let qsParts = req.url.split('?');
      let path = qsParts[0];
      var theme;
      if(qsParts[1]){
        var query = qs.parse(qsParts[1]);
        theme = query['theme'].toLowerCase();
      }

        console.log('path: ', path);
        console.log('theme: ', theme);
        console.log('query: ', query);

        switch (path) {
            case '/':
                {
                    html = jade.renderFile('./views/index.jade', {
                        title: "Jade-App",
                        theme: theme
                    })
                    res.end(html);
                    break;
                }
            case '/post':
                {
                    html = jade.renderFile('./views/post.jade', {
                        active: "active",
                        title: "Chat",
                        theme: theme
                    })
                    res.end(html);
                    break;
                }
            // case '/theme':
            //     {
            //       console.log('themeYYY: ',theme);
            //         html = jade.renderFile('./views/index.jade', {
            //             active: "active",
            //             title: "Chat",
            //             theme: theme
            //         })
            //         res.write(html2);
            //         res.end(html);
            //         break;
            //     }
            case '/send':
                {
                  var name = query['name'],
                      message = query['message'];
                  console.log('name2: ', name, 'message2: ', message);
                    html = jade.renderFile('./views/post.jade', {
                        name: name,
                        theme: 'readable',
                        message: message,
                    })
                    console.log(html);
                    res.end(html);
                    break;
                }
                // case '/send': {
                //   var name = query['name'],
                //       message = query['message'];
                //     console.log('name3: ', name, 'message3: ', message);
                //     res.end(`${name},${message}`);
                //     // res.end(JSON.stringify({name,message}));
                //     break;
                //   }
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
