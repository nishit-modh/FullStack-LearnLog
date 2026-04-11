// function expression - storing function as a veriable
let sumFun = function(a, b) {
    let sum = a + b;
    console.log(sum);
}
sumFun(2, 3);

// in function expression changes can be made..
sumFun = function(a, b) {
    console.log("The Sum is not here!!!");
}
sumFun();
