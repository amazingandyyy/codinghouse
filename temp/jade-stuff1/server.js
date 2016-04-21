'use strict'


const PORT = process.env.PORT || 8000;

let jade = require('jade');
let http = require('http');
let nodeStatic = require('node-static');

let file = new nodeStatic.Server('./public');

http.createServer((req, res) => {

  file.serve(request, response);
  // let html = jade.renderFile('./index2.jade', {
  //     title: 'ANDY TITLE!',
  //     names: ['Andy', 'Joe', 'Anny']
  // });
  //
  // res.end(html);


})
.listen(PORT, err => {
  if(err) return console.log('err: ', err);
  console.log(`Node Server listening on portttt ${PORT}`);
});
