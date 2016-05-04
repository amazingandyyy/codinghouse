function camelKebab(str) {
    var r = str.split(/([A-Z])/).map(function(s) {
        return s.toLowerCase();
        console.log(str);
    });;

    // console.log(str);
    // console.log(r);
    // console.log(r.join('-'));
}
function camelKebab2(str) {
    var r = str.split(/(\d)/);

    // console.log(str);
    console.log(r);
    // console.log(r.join('-'));
}


camelKebab("thisIsNotCoolYeah"); // this-is-not-cool-yeah
camelKebab2("Hello 1 word. Sentence number 2."); // this-is-not-cool-yeah
