// JS call stack: 
// LIFO structure tracking function execution, pushing calls & popping when they return.  

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(`ans: ${ans}`)
}

three();
// Breakpoints:
// debugger-defined pause points in code to inspect state, step through, and trace execution flow.