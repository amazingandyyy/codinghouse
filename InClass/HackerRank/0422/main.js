function countDuplicates(numbers) {
    var newArr = {}
    var result = 0;
    for (i = 0; i < numbers.length; i++) {
        var number = (numbers[i]).toString();
        if (!newArr[number]) {
            newArr[number] = 1;
        } else if(newArr[number] === 1) {
            result += 1;
            newArr[number] += 1;
        }
    }
    // return result;
    console.log(result);
}



function countDuplicates2(numbers) {
    var arr = {};
    var result = 0
    numbers.forEach(e => {
        if (!arr[e]) return arr[e] = 1;
        arr[e]++;
    })
    for (var k in arr) {
        if (arr[k] > 1) result += 1
    }
    console.log(result);
}



countDuplicates2([1, 1, 3, 3, 6, 3]); //a
