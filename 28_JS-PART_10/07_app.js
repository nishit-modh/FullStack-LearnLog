// Qsl. Try out the following events in Event Listener on your own.
// - mouseout
// - keypress
// - Scroll
// - load

let user = document.querySelector("#user");
let body = document.querySelector("body");
let scrBox = document.querySelector("#scroll");

// - mouseout
user.addEventListener("mouseout", function () {
  console.log("Mouse pointer moved away...!");
  this.style.backgroundColor = "red";
  setTimeout(() => {
    this.style.backgroundColor = "white";
  }, 2000);
});

// - keypress
user.addEventListener("keypress", function (event) {
  console.log(event.key);
});

// - Scroll
scrBox.addEventListener("scroll", function (event) {
  console.log("scrolled");
});

// - load (can be applied on window only)
window.addEventListener("load", () => {
  console.log("Page is loaded!");
});

// Qs2. Create a button on the page using JavaScript. Add an event listener to the button that changes the button's color to green for 1 sec when it is clicked.
let btn = document.createElement("button");

btn.innerText = "click Me!!";
body.append(btn);

btn.addEventListener("click", function () {
  btn.style.backgroundColor = "green";
  setTimeout(() => {
    btn.style.backgroundColor = "white";
  }, 1000);
});

// Qs3. Create an input element on the page with a placeholder "enter your name" and a H2 heading on the page inside HTML.
// The purpose of this input element is to enter user's name so it should only input letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible insidethe heading.
// [Please note that no other character apart from the allowed characters should be visible in the heading]

let input = document.querySelector("#mainInput");
let head = document.querySelector("h2");

input.addEventListener("input", function() {
    this.value = input.value.replace(/[^A-Za-z ]/g, ''); // normal replace expression /[^A-Za-z]/g where ^ means not and g means global not only 1st of string...(if we remove space at end sapce will also not be allowed)
    head.innerText = this.value;
})