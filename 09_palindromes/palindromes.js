const palindromes = function (stg) {
let replaced = stg.toLowerCase().replace(/[^a-z]/gi, '');
let splited = replaced.split("");
let reversed = splited.reverse();
let reversedStg = reversed.join("");
console.log(reversed);
if (replaced == reversedStg){
    
    console.log(reversedStg);
    return true;
}
return false;
};

// Do not edit below this line
module.exports = palindromes;
