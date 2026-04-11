const apple = require("./apple");
const orange = require("./orange");
const banana = require("./banana");

// By directly acquiring this folder, Require file getys export from index.js
let fruits = [apple, orange, banana];

module.exports = fruits;