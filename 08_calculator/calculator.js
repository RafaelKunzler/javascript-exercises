const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	const sum = a.reduce((prevVal, elem) => prevVal + elem, 0)
  return sum
};

const multiply = function(a) {
  const multiply = a.reduce((prevVal, elem) => prevVal * elem, 1)
  return multiply
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  } 
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
