function decompressor(str) {
    var r = str.split(/(?=\D)/);
    var result = [];
    for (var i = 0; i < r.length; i++) {
        if (r[i].length > 1) {
            for (var t = 0; t < r[i].slice(1); t++) {
                result.push(r[i][0]);
            }
        }
            result.push(r[i][0]);
    }
    console.log(result.join(''));
}





function decompressor2(str) {
    // var r = str.split(/(?=\D)/);
    // var r = str.split(/(?=\D(?=\d*))/);
    var r = str.match(/\D\d*/g).map(chunk=>{
        return chunk[0].repeat(chunk[1] || 1)
    });


    console.log(r);
}





decompressor("d4e3sf3"); // this-is-not-cool-yeah
decompressor2("d4e3sf3"); // this-is-not-cool-yeah
