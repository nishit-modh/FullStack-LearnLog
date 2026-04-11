let uniUrl = "http://universities.hipolabs.com/search?name=";

async function getClg(country) {
  try {
    let res = await axios.get(uniUrl + country);
    let data = res.data;
    ul.innerText = ""; // to clear previous result
    for (uni of data) {
      let li = document.createElement("li");
      li.innerText = uni.name;
      ul.append(li);
      console.log(uni);
    }
  } catch (e) {
    console.log("error - " + e);
  }
}

let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let country = inp.value;
  getClg(country);
});

let sInp = document.querySelector("#state");
let sList = document.querySelector("#stateUl");
let sBtn = document.querySelector("#stateBtn");

sBtn.addEventListener("click", () => {
  let state = sInp.value;
  getClgByState(state);
});

async function getClgByState(state) {
  try {
    let res = await axios.get(uniUrl + "india");
    let data = res.data;
    sList.innerText = ""; // to clear previous result
    for (uni of data) {
        if (uni["state-province"] == state) {
          let clg = document.createElement("li");
          clg.innerText = uni.name;
          sList.append(clg);
        }
    }
  } catch (e) {
    console.log("error - " + e);
  }
}
