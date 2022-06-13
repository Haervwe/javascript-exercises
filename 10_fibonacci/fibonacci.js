const fibonacci = function(n) {
    let x = +n;
    
    num = Math.floor(x);
    if (num < 0){
        return "OOPS";
    }
    
    let a = 1;
    let b = 1;
    let c = 0;
    if (num<=2){
        return 1;
    }
    for (let i = 3;i<=num;i++){
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
