// Qsl. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3
// print, [7, 9, 0]

let marks = [11, 22, 33, 44, 55];
let n = prompt("Enter the numbers you want");

if( n > 0){
    firstnums = marks.slice(0, n);
    alert("The first numbers are: " + firstnums);
}
else {
    console.error("Enter a positive number");
}
console.log(marks);

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any ositive number].
// For example: for array [7, 9, 0, -2] and n=3 
// Print, [9, O, -2]

if( n > 0){
    lastnums = marks.slice(-n);
    alert("The last numbers are: " + lastnums);
}
else {
    console.error("Enter a positive number");
}

// Qs3. Write a JavaScript program to check whether a string is blank or not.
let str = prompt("Enter your Name...");
if (str[0] === undefined) {
    console.error("string must start with letter");
}
else if(str[0] === " "){
// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
    confirm(`Your name is: ${str.trim()}, Correct?`)
}
else {
    console.log(`thank you ${str}`);
}

//Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.
let index = prompt("Which index lowercase you want to check");

if(str[index] === str[index].toLowerCase()){
    console.log(str[index] + " Character is lowercase");
}
else{
    console.log(str[index] + " Character is not lowercase");
}


// Qs3.1. Write a JavaScript program to check whether a Array is blank or not.
let arr = [];
if (arr.length == 0){
    console.warn("Array is empty");
}
else{
    console.warn("Array is not empty");

}

// Qs6. Write a JavaScript program to check if an element exists in an array or not.
let search = Number(prompt("Enter marks you want to search"));
// prompt() returns a string, so convert to number before searching
// indexOf uses strict equality (===), so types must match
if(marks.indexOf(search) != -1){
    console.log(`${search} marks are present at index ${marks.indexOf(search)}`);
}
else{
    console.log(` ${search} Marks are not present`);
}