//Functions are used to reduce repetetive code tasks

function welcome() {
    console.log("Welcome to the channel, You are now a valuable member!!!");
    console.log("You can brouse the channel...")
    console.log("------------------------------------")
}

welcome();

//print a poem using function
function printPoem() {
    console.log("Twinkel Twinkel Little star");
    console.log("How I Wonder What You Are");
    console.log("------------------------------------");
}

printPoem();

//roll a dice using function

function dice() {
    console.log(Math.floor(Math.random() * 6) + 1);
}

dice();
dice();
dice();
dice();