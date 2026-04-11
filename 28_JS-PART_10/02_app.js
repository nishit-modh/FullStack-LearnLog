// addEventListener
// element.addEventListener( event, callback )

let buttons = document.querySelectorAll("button");

for (let btn of buttons) {
  btn.addEventListener("click", clicked);
  btn.addEventListener("click", sayName);
//   btn.addEventListener("dblclick", () => {
//     console.log("Click only once!!!");
//   });
}

function clicked() {
  alert("The button was clicked");
}

function sayName() {
  alert("Nishit has clicked the button");
}

