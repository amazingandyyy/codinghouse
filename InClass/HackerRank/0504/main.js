function moveZeros(values) {
    for (var i = 0; i < values.length; i++) {
        if(values[i] == 0){
            // values.splice(i,1);
            values.splice(values.indexOf(values[i]),1);
            values.push('0');
        }
    }
    console.log('re: ', values);
}




moveZeros([4,5,2,4,1,0,4,0,1]); // this-is-not-cool-yeah
