'use strict';

var jwt = require('jsonwebtoken');
var payload= {
    userId: 'yoyoyo'
}

var secret = 'this is a gooood secret.';

jwt.sign(payload, secret, {},(err, token)=>{
    console.log(token)
})
jwt.sign(payload, secret, {},(err, token)=>{
    console.log(token)
})
