// Await Keyword
// pauses the execution of its surrounding async function until the promise is settled (resolved or rejected)

async function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if (num < 3) {
        reject("Promise rejected");
      }
      console.log(`Generated number ${num}`);
      resolve();
    }, 1000);
  });
}

async function callNum() {
  try {
    await getNum(); // here await will wait for the function to return promise before moving to next function execution
    await getNum();
    await getNum();
    await getNum();
    await getNum();
  } catch (err) {
    // using try catch we catch error so even if promise is rejected -> netx LOCs are executed.
    console.log("Error occured : " + err);
  }
  console.log("Numbers Printed");
}
callNum();
// ------------------------------------------------------------------------------------

// color change using async & await
async function colorChange(color, delay) {
  return new Promise((resolve, reject) => {
    let h1 = document.querySelector("h1");
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color changed to : ${color}`);
      resolve("color changed");
    }, delay);
  });
}

async function color() {
  await colorChange("red", 1000);
  await colorChange("green", 1000);
  await colorChange("blue", 1000);
  await colorChange("yellow", 1000);
  colorChange("orange", 1000);
}

color();