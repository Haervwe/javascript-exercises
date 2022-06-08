const sumAll = function(a,b) {
    let result = 0;
    let lNum = 0;
    let hNum = 0;
    
    if ( a < 0 || b < 0 || typeof(a) != "number" || typeof(b) != "number"){
        return "ERROR"
    }

    if (a < b){
        lNum = a;
        hNum = b;
    } else {
        lNum = b;
        hNum = a;
    }
    

    for (lNum ; lNum <= hNum; lNum++){
        result += lNum;
    } 
    return result;
};

// Do not edit below this line
module.exports = sumAll;
