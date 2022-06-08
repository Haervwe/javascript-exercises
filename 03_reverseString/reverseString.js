const reverseString = function(a) {
    a = ""+a;
    let c = a.split("");
    c = c.reverse();
    c = c.join("");
    return c;
};

// Do not edit below this line
module.exports = reverseString;
