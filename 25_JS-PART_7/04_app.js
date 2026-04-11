//set Timeout( function, timeout )

console.log("Hello sir,");
setTimeout( () => {
    console.log("Your PC console!!")
}, 3000);
console.log("Welcome to");

//setlnterval( function, timeout )
let id = setInterval( () => {
console.log("You are on the console!!!")
},2000);

// console.log(id); // by using clearInterval(id) we can stop the interval function