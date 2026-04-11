// Reduces the array to a single value
// arr.reduce( reducer function with 2 variables for (accumulator, element) );

let arr = [10, 9, 8, 7, 6, 1, 2, 3, 4, 5];

// sum of array elements using reduce
let arrSum = arr.reduce((sum, n) => (sum += n));
console.log(arrSum);

// max of the array using reduce function

// let max = -1;
// for ( i = 0; i < arr.length ; i++ ){
//     if( max <= arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

let arrMax = arr.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});
console.log(arrMax);

//PQ
//Check if all numbers in our array are multiples of 10 or not.

let tenMul = arr.every((el) => el % 10 == 0);
console.log(tenMul);

// Create a function to find the min number in an array.

let min = Number.POSITIVE_INFINITY; // not necessary

let arrMin = arr.reduce((min, el) => {
  if (el < min) {
    return el;
  } else {
    return min;
  }
});
console.log(arrMin);