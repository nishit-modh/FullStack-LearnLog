// Qs1. Create a number variable num with some value.
// Now, print "good" if the number is divisible by 10 and print "bad" if it is not.
let num = 83790;
if ( num % 10 == 0 ) {
    console.log("Good");
}
else {
    console.log("Bad");
}


// Qs2. Take the user's name & age as input using prompts.
// Then return back the following statement to the user as an alert (by substituting
// their name & age) :
// name is age years old.
let name = prompt("Please enter your good name!");
let age = prompt("Please enter your age!");
let output = `Welcome ${name}, You look very good for a ${age} year old!!!`;
alert(output);


// Qs3. Write a switch statement to print the months in a quarter.
// Months in Quarter I
// January, February, March
// Months in Quarter 2
// April, May, June
// Months in Quarter 3 : July, August, September
// Months in Quarter 4: October, November, December
let quarter = 2;
switch (quarter) {
    case 1 :
        console.log("Jan, Feb, Mar");
        break
    case 2 :
        console.log("Apr, May, Jun");
        break
    case 3 :
        console.log("Jul, Aug, Sep");
        break
    case 4 :
        console.log("Oct, Nov, Dec");
        break
    default : 
        console.log("There are only 4 quarters");
}


// Qs4. A string is a golden string if it starts with the character 'A' or 'a' and has a total
// length greater than 5.
// For a given string print if it is golden or not.
let str = "America";
if ( (str[0] === "A" || str[0] === "a") && (str.length > 5) ) {
    console.log("A golden string");
}
else {
    console.log("A normal string");
}


// Qs5. Write a program to find the largest of 3 numbers.
let a = 1243;
let b = 12;
let c = 1033;

if ( a >= b && a >= c) {
    console.log("largest number is " + a);
}
else if (b >= a && b >= c) {
    console.log("largest number is " + b);
}
else if (c >= a && c >= b) {
    console.log("largest number is " + c);
}

// Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
// Eg : 32 and 47852 have the same last digit i.e. 2
let num1 = 124;
let num2 = 103;
if ( num1 % 10 == num2 % 10) {
    console.log("Last digit is same");
}
else {
    console.log("Different Last digit");
}