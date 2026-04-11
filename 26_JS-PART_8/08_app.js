//REST
// when (...array) is used as function arguments then => it takes n number of arguments and stores tem in an array
// Allows a function to take an indefinite number of arguments and bundle them in an array

// sum of n numbers
function sum(...args) {
  return args.reduce((sum, el) => sum + el);
}

//  average of the arguments
function avg(...args) {
  let total = args.reduce((sum, el) => sum + el);
  return total / args.length;
}

// min of the arguments
function min(...args) {
  let out = args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
  return out;
}
