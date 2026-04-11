// Qs1. Write a JS program to delete all occurrences of element 'num' in a given array.
// Example : if 2, 3, 4, 5, 6, 2, num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

let num = prompt("Enter the number you don't want");
num = parseInt(num);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2, 1, 3, 5, 6, 7, 8, 9, 4];
if (num < 10) {
  for (numbers of arr) {
    if (numbers == num) {
      let i = arr.indexOf(numbers);
      arr.splice(i, 1);
    }
  }
  console.log(`The array after removing ${num} is ${arr}`);
} else {
  console.log("Enter number between 1 to 9");
}

// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

let n = 1234567890;
let dupe = n;
let count = 0;
while (dupe > 0) {
  dupe = Math.floor(dupe / 10);
  count++;
}
console.log(`The number digits in ${n} is ${count}`);

// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25
//-----------------------------------------------------------------------------
// My try >> worked but less precise and slower due to more operations && operations were directely performed on number
// let number = 1234567890;
// let sum = 0;
// while(number > 0){
//     m = (number/10) - (Math.floor(number/10));
//     m = m*10;-------------------------------------------// line 40 & 41 performs the same task of modulo function(%) inefficiently
//     number = Math.floor(number/10);
//     sum = sum + m;
// }
// console.log(Math.floor(sum));
//-----------------------------------------------------------------------------

//faster --  because it uses fewer, simpler operations and avoids floating-point math.
let number = 1234567890;
let sum = 0;
let copy = number;

while (copy > 0) {
  digit = copy % 10;
  sum += digit;
  copy = Math.floor(copy / 10);
}
console.log(`The sum of the digits of ${number} is ${sum}`);

// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer. ]
// Example
// 7! (factorial of 7) = lx2x3x4x5x6x7 = 5040
// 5! (factorial of 5) = lx2x3x4x5 = 120
// 3! (factorial of 3) = lx2x3 = 6
// 0! Is always 1

let a = 7;
let fact = 1;
for (i = a; i > 0; i--) {
  fact *= i;
}
console.log(`The Factorial of ${a} is ${fact}`);

// Qs5. Find the largest number in an array with only positive numbers.
let large = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2, 1, 3, 5, 6, 7, 8, 9, 4];
let largest = 0;
let index = -1;
for (i = 0; i < large.length; i++) {
  if (large[i] >= largest) {    //if condition (<=) for last occuring largest number (<) for first occuring largest number
    largest = large[i];
    index = i;
  }
}
console.log(`The largest number in ${large} is ${largest} at index ${index}`);