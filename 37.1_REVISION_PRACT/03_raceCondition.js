console.log("1: The Script Starts");

setTimeout(() => {
    console.log("2: The Timeout (Macro-task)");
}, 0);

Promise.resolve().then(() => {
    console.log("3: The Promise (Micro-task)");
});

console.log("4: The Script Ends");

// --- YOUR TASK ---
// 1. Run this and observe the output.
// 2. Based on your observation, if the stack is clear, which queue 
//    does the Event Loop check first: Micro-task or Macro-task?