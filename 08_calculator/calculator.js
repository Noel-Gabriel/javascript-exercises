const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, a) => total + a, 0);
};

const multiply = function(arr) {
	return arr.reduce((total, a) => total*a, 1);
};

const power = function(a, n) {
	if(n == 0) {
		return 1;
	}
	if(n == 1) {
		return a;
	}
	let sub = power(a, Math.floor(n/2));
	return sub * sub * ((n % 2 == 0)? 1 : a);
};

const factorial = function(n, acc = 1) {
	if(n == 1 || n == 0) {
		return acc;
	}
	return factorial(n-1, acc*n);
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
