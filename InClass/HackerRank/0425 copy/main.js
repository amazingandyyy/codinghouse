function orderWords(str) {
    var arr = str.split(' ');
    var newArr = [];
    arr.forEach(e=>{
        var num = e.match(/\d/)[0];
        newArr.push(num + e);
    })
    newArr.sort();
    var result = newArr.map((e) => {
        var n = e.match(/\d+/g);
        if (n.length > 1) {
            e.replace(/\d+/, '');
        }
        return e.replace(/\d/, '');;
    });
    console.log(result.join(' '));
    return result.join(' ');
}

orderWords("is2 Thi1s T4est 3a"); // [2,3]
