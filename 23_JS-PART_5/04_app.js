const range = prompt('Enter the range "Exa: 1 to __');
console.log(`The number will be between 1 to ${range}`);

const random = Math.floor(Math.random() * range) + 1;
let guess = prompt("Guess the Number");

while (1) {
  if (guess == "quit" || guess == "Quit") {
    console.log("You are a looser");
    break;
  }

  if (guess == random) {
    console.log(`correct, random number was ${random} !!`);
    break;
  } else if (guess > random) {
    guess = prompt("Wrong guess, ry a bit smaller number!!");
  } else {
    guess = prompt("Wrong guess, try a bit larger number!!");
  }
}
