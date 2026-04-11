
// HIGHER ORDER FUNCTION
// A function that does one or both :
//  • takes one or multiple functions as arguments
//  • returns a function



// Takes function as an argument
function multiGreet( func, num) {
    for( i = 1 ; i <= num ; i++){
        func();
    }
}
let Hello = function(name) {
    console.log(`Hello dear, ${name}`);
} 

let namaste = function(name) {
    console.log(`Namaste , ${name}`);

}
multiGreet( namaste , 5);


// returns a function as an argument
function oddEvenFactory(request) {
    if( request == "even") {
        function even(n) {
            console.log( n % 2 === 0);
        }
        return even;
    }
    else if( request == "odd") {
        function odd(n) {
            console.log( !(n % 2 === 0));
        }
        return odd;
    }
    else{
        console.log("Wrong request")
    }
}
let request = "odd";
let func = oddEvenFactory(request); // this is where factory will return the function to func
console.log(func);// by calling func in the console we can check a number for odd / even