const repeatString = (str, num) => {
    if(num == 0 || str == "") { return ""; }
    if(num < 0) { return "ERROR"; }
    let originalStr = str;
    while(--num) {
        str += originalStr;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
