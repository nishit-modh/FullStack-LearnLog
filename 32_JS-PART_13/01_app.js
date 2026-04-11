let url = "https://catfact.ninja/fact";
let p = document.querySelector("p");
let catBtn = document.querySelector("#catFact");

async function getFact() {
  try {
    let res = await axios.get(url);
    p.innerText = res.data.fact;
  } catch (e) {
    console.log(`Error occured - ${e}`);
  }
}

catBtn.addEventListener("click", () => {
  getFact();
});

let dUrl = "https://dog.ceo/api/breeds/image/random";
let dogBtn = document.querySelector("#dogImg");
let img = document.querySelector("img");

async function getImg() {
  try {
    let res = await axios.get(dUrl);
    img.setAttribute("src", res.data.message);
  } catch (e) {
    console.log(`Error occured - ${e}`);
  }
}

dogBtn.addEventListener("click", () => {
  getImg();
});