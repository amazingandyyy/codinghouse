function taxCalculator(total) {
    var result = 0;
    var rule = [0.10, 0.07, 0.05, 0.03];
    if (total < 0) {
        result = 0;
    } else if (total < 10) {
        result = total * 0.1;
    } else if (total > 10 && total < 20) {
        result = 10 * 0.1 + (total % 10) * 0.07;
    } else if (total > 20 && total < 30) {
        result = (10 * 0.1) + (10 * 0.07) + (total % 20) * 0.05;
    } else if (total > 30) {
        result = (10 * 0.1) + (10 * 0.07) + (total % 20) * 0.05 + total * 0.03;
    }
    console.log("resultttt: ", (Math.round(result * 100)/100));
    return (Math.round(result * 100)/100) ;
}



// <10 --> 10%
// 14 --> 10%-10, 7%-4
// 23 --> 10%-10, 7%-10, 5%-3
// 36 --> 10%-10, 7%-10, 5%-10, 3%-6
taxCalculator(21); // 10 10 10 3 rest
