// Qsl. Square and then sum the array elements using the arrow function and then find the average of the array.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sqr = nums.map((el) => el ** 2);
console.log(sqr);

let sum = sqr.reduce((sum, el) => (sum += el));
console.log(sum);

console.log(sum / nums.length);

// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.
let plus5 = nums.map((el) => el + 5);
console.log(plus5);

//Qs3. Create a new array whose elements are in uppercase of words present in the original array.
let names = ["Nishit", "Dev", "Priten", "Dhruvil", "Vishwa", "Nilesh", "Dinal"];
let UC = names.map((name) => name.toUpperCase());
console.log(UC);

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
let doubleAndReturnArgs = (arr, ...others) => {
  let double = others.map((el) => el * 2);
  let out = [...arr, ...double];
  return out;
};

//Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const mergeObject = (obj1, obj2) => ({ ...obj1, ...obj2 });