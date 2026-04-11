let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

// Event Bubbling
// it is when event occurs on child element which also propogates to parent element
// like when we click child element, but the event also o0ccurs for clicking parent element - to stop this "stopPropogation()" is used...!

div.addEventListener("click", function () {
  console.log("Div was clicked!");
});

ul.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("ul was clicked!");
});

for (li of lis) {
  li.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Li was clicked!");
  });
}
