// refer mdn for keybord events

let inp = document.querySelector("input");

inp.addEventListener("keydown", (event) => {
  if ((event.code == "ArrowUp")) {
    console.log("Your character moved Forward");
    console.log("You pressed '" + event.code + "'");
  } else if ((event.code == "ArrowDown")) {
    console.log("Your character moved Backward");
    console.log("You pressed '" + event.code + "'");
  } else if ((event.code == "ArrowLeft")) {
    console.log("Your character moved to Left");
    console.log("You pressed '" + event.code + "'");
  } else if ((event.code == "ArrowRight")) {
    console.log("Your character moved to Right");
    console.log("You pressed '" + event.code + "'");
  } else{
    console.log('You pressed "' + event.key + '"');
    // console.log("key code " + event.code);
  }
});