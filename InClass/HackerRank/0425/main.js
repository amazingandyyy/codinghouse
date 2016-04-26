function get_height(input) {
    var arr = [];
    for (var i = 1; i < input.length; i++) {
        var value = 1;
        for (var j = 0; j < input[i]; j++) {
            if (j % 2 === 0) {
                value *= 2;
            } else {
                value += 1;
            }
        }
        arr.push(value);
    }
    console.log(arr);
}


get_height([2, 1, 2]); // [2,3]


function get_height2(input) {
    // var arr = [];
    var result = input.map(e => {
        var value = 1;
        for (var j = 0; j < e; j++) {
            if (j % 2) value += 1;
            value *= 2;
        }
        return value;
    })
    console.log('result: ', result);
}




get_height2([2, 1, 2]); //a
