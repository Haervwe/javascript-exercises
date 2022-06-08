const removeFromArray = function(...theArgs) {
    const a = theArgs[0];
    const b = Array.from(theArgs);
    b.shift();
    const del = b;
        for (let i=0; i < a.length; i++){
            for (let j=0; j < del.length; j++){
                if (del[j] === a[i]) {
                        a.splice(i,1)
                        i--;
                    break;
                }
            }
            
        } 

    return a;


};

// Do not edit below this line
module.exports = removeFromArray;
