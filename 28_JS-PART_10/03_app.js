function colorGenerator() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

let head = document.querySelector("h1");
let div = document.querySelector("div");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let randomColor = colorGenerator();
  console.log("New color generated");

  head.innerText = randomColor;
  div.style.backgroundColor = randomColor;
});

div.addEventListener("click", ()=> {
    alert("This is div...Click button for color!!!")
})