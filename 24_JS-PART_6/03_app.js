// return - send back value from the function and ends the function execution.
function sum(a, b) {
    return a+b;
}
sum(2, 3);

// the part of code that comes after execution of return -> never gets executed
function Hello() {
    console.log("Hello UI");
    console.log("Hello UI");
    return 0;
    console.log("Won't be executed")
    console.warn("Won't be executed")
}
Hello();

//Create a Function that returns the sum of numbers from 1 to n.
function sumN(N){
    let total = 0;
    for( i = 0; i <= N ; i++){
        total += i;
    }
    return total;
}
console.log(sumN(9));

//Create a Function that returns the concatenation of all strings in an array.
function Concat( arr ){
    let start = "";
    for( i = 0 ; i < arr.length ; i++){
        start = start.concat(arr[i]);
        }
    return start;
}

console.log(Concat([ "Nishit " , "Modh " , "is ", "a ", "Genius.!"]))