const fibonacci = function(n, memo = {}) {
    if(n < 0) {
        return "OOPS";
    }
    if(n <= 1) {
        return parseInt(n);
    }
    if(toString(n) in memo) {
        return memo[n];
    }
    memo[toString(n)] = fibonacci(n-1, memo) + fibonacci(n-2);
    return parseInt(memo[toString(n)]);
};

// Do not edit below this line
module.exports = fibonacci;
