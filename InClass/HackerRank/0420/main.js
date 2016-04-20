function wiggleArrangeArray(a) {
    a.sort((a, b) => b - a);
    var r = [];

    while (a.length) {
        r.push(a.shift(), a.pop());
    }

    console.log('result: ', r);
}


wiggleArrangeArray([25, -2, 25, 8, -3, -7]);
// 25, -7, 25, -3, 8, -2
