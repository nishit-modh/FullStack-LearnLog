let form = document.querySelector("form");

// SUBMIT Event
form.addEventListener("submit", function (event) {
  event.preventDefault(); // when event occurs - prevents default or html assigned action
  alert("Your responce has been recorded.");

  console.dir(this.elements); // THIS - form for normal function (not for () => function)

  let user = document.querySelector("#user");
  let pass = form.elements[1];
  let clr = this.elements[2];

  alert(`Hi ${user.value}, Your password is ${pass.value}.`);
  console.log("Selected color is: " + clr.value);
});

// CHANGE Event
// tracks event changes between initial and final state
let inp = document.querySelector("#wrtInp");
let para = document.querySelector("p");

inp.addEventListener("change", function () {
  alert("Text is chnaged...");
  console.log(`value changed to: "${inp.value}"`);
});

// INPUT Event
// tracks event with every change in real-time
inp.addEventListener("input", function () {
  console.log(`Input value is changing to: "${this.value}"`);
  para.innerText = inp.value;
});
