// Expands an iterable into multiple values
// (...arr) (...str)

let arr = [10, 9, 8, 7, 6, 1, 2, 3, 4, 5];
let str = "Nishit Modh";

console.log(arr);
console.log(...arr); // it individually enters each element one at a time
console.log(str);
console.log(...str);

console.log(Math.min(arr)); // this is not possible on array directly
console.log(Math.min(...arr)); // so spread enters values one by one

// Creatig array copy using spread as array literal
let arrCopy = [...arr];
console.log(...arrCopy);

// inserting elements of string one by one into array
let strArr = [...str];
console.log(strArr);

// SPREAD => OBJECT LITERALS
let student = {
  name: "Nishit",
  GPA: 8.5,
};
// creating stuCopy with additional property id
let studentCopy = { ...student, id: 45 };
console.log(studentCopy);
// adding array or string elemetns as key value pairs in object
let obj = { ...student.name };
console.log(obj);