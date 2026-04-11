let mobilePrice = 25000;
let laptopPrice = 90000;
//The lengthy method
console.log("The total bill is " + (mobilePrice + laptopPrice) + " Rupees.");//method 1
//undirect method
let bill = "The total bill is " + (mobilePrice + laptopPrice) + " Rupees."; 
console.log(bill);//method 2
//using template literals (using backticks and $(brackets) for calculation)
let output = `The Final cost is ${mobilePrice+laptopPrice} Rupees.`
console.log(output);//Method 3