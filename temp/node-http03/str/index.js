'use strict';

module.exports = function(req, res, params) {

    var operation = params.shift().toLowerCase();
    console.log(operation);

    switch (operation) {
        case 'wordcount':

            var str = decodeURIComponent(params[0]);

            var count = str.split(' ').length;

            res.write('ddd\n')
            // res.write(`${count}\n`)
            res.end('\n');


            // require('./wordCount')(params, res);


            break;
            // case 'upperCase':
            //     require('./upperCase')(params, res);
            //     break;
        default:
            res.statusCode = 404;
            console.error('What do you mena????');
            res.write('Not Foundddd!');
            res.end('\n');

    }


    res.end('\n');

}
