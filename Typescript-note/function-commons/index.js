"use strict";
exports.__esModule = true;
// basic
function count(num) {
    if (num) {
        return num * num;
    }
}
var value = count(3); //9
console.log(value);
// return void
function callback(fn) {
    // const output = 100; // error type
    var output = "Hello world!";
    fn(output); //Hello world!
}
callback(function (text) {
    console.log(text);
});
function getUser(fn) {
    var name = fn();
    console.log(name); //{ name: 'Dennis' }
    return name;
}
getUser(function () {
    return { name: "Dennis" };
});
