var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // console.log('req.cookies', req.cookies);
    res
        .cookie('access_token', '8af7gd6s56d6f79adfdsrtw3fire32r7frd')
        .clearCookie('yo')
        .render('index', {
            title: 'Express'
        });
});


function authMiddleware(req, res, next) {

    var token = res.cookies.access_token;

    if (token) {
        // good token
        next();
    } else {
        // bad token
        res.status(401).send('Who are you?')
    }

}


router.get('/secret', authMiddleware, function(req,res) {

})



module.exports = router;
