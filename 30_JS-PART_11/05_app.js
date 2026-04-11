let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("Color changed to " + color);
    }, delay);
  });
}

changeColor("red", 1000)
  .then((resolve) => {
    console.log(resolve);
    return changeColor("green", 1000);
  })
  .then((resolve) => {
    console.log(resolve);
    return changeColor("blue", 1000);
  })
  .then((resolve) => {
    console.log(resolve);
    return changeColor("yellow", 1000);
  })
  .then((resolve) => {
    console.log(resolve);
    return changeColor("orange", 1000);
  })
  .then((resolve) => {
    console.log(resolve); // this is to print last resolve of orange color
  });
