// improved version of - Promises
// resolve & reject is success and failure elements
// then (in case of resolve) and catch(In case of reject) are paired with promise object

function saveToDB(data) {
  return new Promise((resolve, reject) => {
    let dataSpeed = Math.floor(Math.random() * 10) + 1;
    if (dataSpeed > 4) {
      resolve("Connection is Good...");
    } else {
      reject("Connection Lost!!!");
    }
  });
}

saveToDB("Random")
  .then((result) => {
    console.log("Success: Data 1 saved!");
    console.log("Cause : " + result);
    return saveToDB("Hello World");
  })
  .then((result) => {
    console.log("Success: Data 2 saved!");
    console.log("Cause : " + result);
    return saveToDB("Nishit Here!");
  })
  .then((result) => {
    console.log("Success: Data 3 saved!");
    console.log("Cause : " + result);
  })
  .catch((err) => {
    console.log("Failure!!!");
    console.log("Cause : " + err);
  });


// here result and err are arguments in then and catch which catches -> outcomes from resolve & reject