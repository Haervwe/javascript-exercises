const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	let b  = 0
  a.forEach((a)=>Math.floor(b+=a));
  return b;
};

const multiply = function(a) {
  let b  = 1
  a.forEach((a)=>Math.floor(b*=a));
  return b;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	if (a==0){
    return 1;
  }
  let b = 1;
  for (let i= 1; i<=a; i++){
    b = b*i;
  }
  return b;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
