function sum(a, b = 1) {
  // b will be 1 by default when only 1 parameter is passed in function call
  return a + b;
}

console.log(sum(10, 10));
console.log(sum(10));
