let gameSeq = [];
let userSeq = [];
let btnList = ["blue", "red", "green", "yellow"];

let started = false;
let lvl = 0;
let score = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keydown", function () {
  if (started == false) {
    console.log("Game started");
    started = true;
    lvlUp();
  }
});

function flash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 200);
}

function gameFlash(btn) {
  btn.classList.add("gameFlash");
  setTimeout(() => {
    btn.classList.remove("gameFlash");
  }, 200);
}

function lvlUp() {
  lvl++;
  userSeq = []; // this resets at each lvl up so the user has to reenter all previous entries!!!
  h2.innerHTML = `Level ${lvl}`;

  let randIndex = Math.floor(Math.random() * 4);
  let randColor = btnList[randIndex];
  let randBtn = document.querySelector(`.${randColor}`);
  flash(randBtn);

  gameSeq.push(randColor);
}

function btnPress() {
  let btn = this;
  gameFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  check(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function check(index) {
  if (started == true) {
    if (userSeq[index] === gameSeq[index]) {
      if (userSeq.length == gameSeq.length) {
        setTimeout(lvlUp, 1000);
      }
    } else {
      console.log("game over");
      let body = document.querySelector("body");
      body.style.backgroundColor = "red";
      setTimeout(() => {
        body.style.backgroundColor = "white";
      }, 100);
      reset();
    }
  }
}

function reset() {
  h2.innerHTML = `Game Over! Your score was : ${lvl}, Press any key to Restart!!!`;
  highscore();
  started = false;
  gameSeq = [];
  userSeq = [];
  lvl = 0;
}

// home work
function highscore() {
  let scrPrint = document.querySelector("h3");
  if (lvl > score) {
    score = lvl;
    scrPrint.innerHTML = `Your Highest Score : ${score}`;
  }
}
