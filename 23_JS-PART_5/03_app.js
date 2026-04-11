// to get fixed values of math 
console.log(Math.PI);
console.log(Math.E);

//to use methods of math
console.log(Math.abs(-12));
console.log(Math.pow(4, 2));
console.log(Math.floor(5.5));
console.log(Math.ceil(5.5));
console.log(Math.random());//generates random num between 0 and 1(one not included)


// To generate random numbers between 1 to n, x times
let n = 20;
let x = 25;
for (i = 0 ; i < x ; i++ ){
    let random = Math.floor(Math.random() * n) + 1
    console.log(random);
}