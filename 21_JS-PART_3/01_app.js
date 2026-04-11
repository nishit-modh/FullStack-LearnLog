let str = "    Hello, This is a String!!           ";
console.log(str);

// Trims whitespaces from both ends of string & returns a new one.
console.log(str.trim());

// changes all the letters to Uppercase
console.log(str.toUpperCase());
// changers all the letters to lowercase
console.log(str.toLowerCase());

//indexOf
//Returns the first index of occurrence of some value in string. Or gives -1 if not found.
console.log(str.indexOf("Hello"));// 4
console.log(str.indexOf("hello"));// -1, cause "hello" with samll h is not peresent
//Displays the first occurence of the argument
console.log(str.indexOf("i"));// 13