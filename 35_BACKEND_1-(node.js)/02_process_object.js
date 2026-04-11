// process : This object provides information about, and control over, the current Node.js process.
// process.argv : returns an array containing the command-line arguments passed when the Node.js process was launched.

// console.log(process.argv); // Prints all arguments 

// to print the user entered Argument
let args = process.argv;

for (i = 2; i < args.length ; i++){
    console.log(`Hello & Welcome to node js dear ${args[i]}`);
}