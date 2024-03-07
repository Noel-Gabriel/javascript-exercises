const palindromes = function (string) {
    string = string.toLowerCase();
    let stripped = string.match(/[A-Za-z0-9]/g)
    let l = 0;
    let r = stripped.length-1;
    while(l < r) {
        if(stripped[l] !== stripped[r]) {
            return false;
        }
        ++l;
        --r;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
