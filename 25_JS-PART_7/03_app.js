// const func = (argl, arg2 ..) => { function definition }

let sum = (a, b) => { //for shorter syntax
    return a + b;
}

let hello = () => {
    console.log("Hello world");
}

let qube = n => { // for single input in function, braces are optional
    return n*n*n;
}

// Implicit return in arrow function, return without using keyword when function is used to only return an output.
let mul = (a, b) => ( a * b);

