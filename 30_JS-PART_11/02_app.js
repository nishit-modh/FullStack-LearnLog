let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColor) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColor) nextColor(); // // If a callback function is provided, execute it.

  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("green", 1000, () => {
    changeColor("blue", 1000, () => {
      changeColor("yellow", 1000, () => {
        changeColor("orange", 1000);
      });
    });
  });
});
// Callback Hell: Nested callbacks that make code hard to read, debug, and maintain.
// Callbacks are still used because they are simple, widely supported, and form the base for Promises/async patterns.