// module.exports is a special object

// Method 1 : Using module.exports 

// const sum = (a, b) => a+b;
// const mul = (a, b) =>a*b;
// const PI = 3.14;
// const g = 9.8;

// let obj = {
//     sum: sum,
//     mul: mul,
//     PI: PI,
//     g: g,
// }

// module.exports = obj;
// ======OR======
// module.exports = {
//     sum: (a, b) => a+b,
//     mul: (a, b) => a*b,
//     PI: 3.14,
//     g: 9.8,
// }

// Can directly export random values as well 
// module.exports = 3.14;

// =============================================
// Method 2 : using module.exports or exports

exports.sum = (a, b) => a+b;
exports.mul = (a, b) =>a*b;
exports.PI = 3.14;
exports.g = 9.8;