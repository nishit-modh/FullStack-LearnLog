//table for any number
let n = prompt("Enter the number you want the Table of: ");
n = parseInt(n);

for (let i = n; i <= n * 10; i = i + n) {
  console.log(i);
}
