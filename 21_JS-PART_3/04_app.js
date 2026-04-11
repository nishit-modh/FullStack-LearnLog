let students = ["Aman" , "Nishit" , "Dev"]
console.log(students);
console.log(students[1]);
console.log(students.length);

// array can be mixed in type in JS
let info = [ "Nishit", 20 , 8.22];

//empty array
let empArr = [];
console.log(info[0]);
console.log(info[0].length);

//arrays are mutable
console.log(info);
info[2] = 8.55;
console.log(info);