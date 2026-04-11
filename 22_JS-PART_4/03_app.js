//  while (condition) {
//do something
// }

let i = 1;
while (i <= 20) {
  console.log(i);
  i++;
}

//favurite movie guessing game
let favMovie = "Batman Begins";
let guess = prompt("Guess my favourite movie");
let giveup = false;
while (!giveup) {
  if (favMovie !== guess) {
    console.log("Nice try but you were wrong!!");
    giveup = confirm("You are wrong, Want to Give UP??");
    if (!giveup) {
      guess = prompt("Guess Again!!");
    }
    else{
      console.log("DUMB!!!")
    }
  } else {
    console.log("YaY, You did it!");
    break;
  }
}
