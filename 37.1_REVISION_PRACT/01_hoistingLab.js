// Variable hoisting
console.log("Varibale value: ", myVar);
// this will give #ReferenceError
// console.log("Let variable: ", myLet)

var myVar = "Hoisting"
// TDZ : when a variable is called without initialization.
// if, var - it is assigned undefined
// else if, let/const - Js check for initialization in whole code 
//      if not initialized: refErr: myLet is not defined
//      else(if initialized), refErr: Cannot access 'myLet' before initialization
let myLet = "TDZ"

// ================================
// Function hoisting
// ================================

// classic function - hoisted normally
normalHoisted()

// using variable - type error : function is undefined(var hoisting) and we can't call undefined
// varFunction()

// using let/const - reference error : function stays in TDZ
// constFunction()

function normalHoisted(){
    console.log("Classic functions are fully hoisted!")
}

var varFunction = function(){
    console.log("Expression functions follow Variable rules : Var - TypeErr")
}

const constFunction = function(){
    console.log("Expression functions follow Variable rules : const - refErr")
}