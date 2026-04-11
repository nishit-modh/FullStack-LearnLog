//FUNCTION SCOPE
//Variables defined inside a function are not accessible (visible) from outside the function.
function calSum(a, b) {
    sum = a + b;
    return sum;
}
console.log(sum);//err-1

// BLOCK SCOPE
//Variables declared inside a { } block cannot be accessed from outside the block.--> as seen in for loop
{
    let me = "Great";
}
console.log(me);//err-2

//LEXICAL SCOPE
//a variable defined outside a function can be accessible inside another function defined after the variable declaration.
//The opposite is NOT true.
function outFun() {
    let x = 5;
    let y = 10;
    function inFun() {
        console.log(x);
        console.log(y);
        let num = 15;
    }
    inFun();
    console.log(num);// err-3
}

outFun();
inFun();// err-4 (inFun is in the function scope of outFun)