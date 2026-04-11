// this in Event Listeners
// When 'this' is used in a callback of event handler of something, it refers to that something.

let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let para = document.querySelector("p");

function changeColor() {
    console.dir(this);
    console.log(`The color of ${this} is changed`);
    this.style.color = "blue";
}

h1.addEventListener("click", changeColor);// here this will refer to h1
btn.addEventListener("click", changeColor);
h2.addEventListener("click", changeColor);
para.addEventListener("click", changeColor); // here this will refer to para