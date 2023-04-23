"use strict";
exports.__esModule = true;
// function
function getMultiple(arr) {
    if (arr.length > 0) {
        return arr[0];
    }
    // return undefined; //error must be null
    return null;
}
getMultiple([2, 4, 8]);
function combine(arr, arr2) {
    if (arr.length == 0 || arr2.length == 0)
        return undefined;
    return arr.concat(arr2);
}
var result = combine([1, 2], ["Hello world"]);
console.log(result);
