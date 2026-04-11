// require() a built-in function to include external modules that exist in separate files.

const reqVal = require("./03_module_exports");
console.log(reqVal.sum(9,10));

const Fruits = require("./Fruits");
console.log(Fruits); // whole Fruits folder exports are acquired

// will give some error if import is used in same dir due to changes in "package.josn -> type : module"