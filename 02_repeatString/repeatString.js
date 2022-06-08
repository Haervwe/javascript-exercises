const repeatString = function(a , b) {
    let init = a;
    let repeat = init;
    
    if (b < 0){
        return "ERROR";
    }
    else if (b == 0 ){
        return "";
    } else {

        for (let i = 1; i < b; i++ ) {
            repeat = repeat + init;
        }
        return repeat;
    }
};

// Do not edit below this line
module.exports = repeatString;
