'use strict';

module.exports = function(params, res) {
  var operation = params.shift();

  switch(operation) {
    case "sum":
      var result = params.reduce((sum, num) => {
        return sum + parseFloat(num);
      }, 0);
      res.end(result.toString());
      break;

    case "diff":
    var result = parseFloat(params[0]) - parseFloat(params[1]);
    res.end(result.toString());
    break;

    case "product":
    var result = params.reduce((sum, num) => {
      return sum * parseFloat(num);
    }, 1);
    res.end(result.toString());
    break;

    case "divide":
    var result = parseFloat(params[0]) / parseFloat(params[1]);
    res.end(result.toString());
    break;

    case "pow":
    var result = Math.pow(params[0], params[1]);
    res.end(result.toString());
    break;

    default:
      res.end("Not a valid operation!");
  }
};
