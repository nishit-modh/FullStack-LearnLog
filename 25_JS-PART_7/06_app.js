//Write an arrow function that returns the square of a number 'n'.
const sqr = (n) => n * n;

// Write a function that prints "Hello World" 5 times at intervals of 2s each.
function hello5() {
  let id = setInterval(() => {
    console.log("Helo world");
  }, 2000);
  setTimeout(() => {
    clearInterval(id);
    console.log("Interval Ran");
  }, 10000);
}

//Qsl . Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
let arrAvg = (arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

//Qs2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.

let evenCheck = (n) => n % 2 == 0;