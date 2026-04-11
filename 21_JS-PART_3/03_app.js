let str = "hello, Strings hello!"

//slice
//Returns a part of the original string as a new string.
// starting index is inclusive, ending index is not inclusive
let halfstr = str.slice(0,4);//hell 
console.log(halfstr);
console.log(str.slice(-6));// last 6 elements as output

//replace
// Searches a value in the string & returns a new string with the value replaced.
console.log(str.replace("i", "o"));
//only he first occurence is replaced.
console.log(str.replace("hello" , "Hi"));

//repeat
// Returns a string with the number of copies of a string
let msg = " Welcome!! ";
console.log(msg.repeat(3));