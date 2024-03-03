const removeFromArray = (arr, ...args) => {
    let ans = [];
    for(let i = 0; i < arr.length; ++i) {
        if(!args.includes(arr[i])) {
            ans.push(arr[i]);
        }
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
