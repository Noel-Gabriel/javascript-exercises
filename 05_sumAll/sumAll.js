const sumAll = (a, b) => {
    if(typeof a !== typeof b || typeof a !== "number" || a < 0 || b < 0) {
        return "ERROR";
    }
    if(a > b) {
        let tmp = a;
        a = b;
        b = tmp;
    }
    return (b*(b+1)/2 - ((a > 1)? a*(a-1)/2 : 0));
};

// Do not edit below this line
module.exports = sumAll;
