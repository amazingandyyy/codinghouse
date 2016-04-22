function firstRepeatingLetter(s) {
    for (var o = 0; o < s.length; o++) {
      for( var i = o+1; i<s.length;i++){
        if(s[o] === s[i]){
          return console.log(s[o]);
        }
      }
    }
}

function firstRepeatingLetter2(s) {
    for (var o = 0; o < s.length; o++) {
      var rest = s.slice(o+1);
      if(rest.includes(s[o])) {
        return console.log(s[o]);
      }
    }
}


firstRepeatingLetter2('dafgfa'); //a
