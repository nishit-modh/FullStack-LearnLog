// DUM Events
// onclick (when an element is clicked)
// onmouseenter (when mouse enters an element)

let buttons = document.querySelectorAll("button");

for (btn of buttons) {
  btn.onclick = clicked;
  btn.onclick = sayName; // only one will be called due to onclick 
}

function clicked() {
  alert("The button was clicked");
}

function sayName() {
  alert("Nishit has clicked the button");
}

// onclick has a limitation that it can only perform one function
