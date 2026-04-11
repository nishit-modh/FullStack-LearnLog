//Comparison Operators
let a = 10;
let b = 5;
console.log(a > b);
console.log( 8**2 == 2**8);// >, >=, <, <=, ==, !=,etc.
// == checks only compares values not type

//special comparison operator

// === checks value and type both
let num5 = 5;
let str5 = '5';
console.log( num5 == str5);//true
console.log( num5 === str5);//false
//difference in == and ===
    //1    
        // 0 == ' ' is true
        // 0 === ' ' is false
    //2
        // 0 == false is true
        // 0 === fasle is false
    //1    
        // null == undefined is true
        // null === undefined is false