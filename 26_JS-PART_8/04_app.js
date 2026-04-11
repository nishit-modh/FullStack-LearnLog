let oddNum = [1, 3, 5, 16, 7, 9, 13];
let evenNum = [2, 4, 6, 8, 88, 66, 44, 22, 20];

// arr.every(some function definition or name);
// Returns true if every element of array gives true for some function. Else returns false.

let oddCheck = oddNum.every((odd) => odd % 2 != 0); // checks if every element is odd or not
console.log(oddCheck);
let evenCheck = evenNum.every((even) => even % 2 == 0);
console.log(evenCheck);

// arr.some(some function definition or name);
// Returns true if some elements of array give true for some function. Else returns false.

let anyEven = oddNum.some((odd) => odd % 2 == 0); // checks if there is any even number in "oddNum" array
console.log(anyEven);
let anyOdd = evenNum.some((even) => even % 2 != 0);
console.log(anyOdd);