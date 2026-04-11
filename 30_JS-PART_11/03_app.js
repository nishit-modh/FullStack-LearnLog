// // The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// function saveToDB(data, success, failure) {
//   let dataSpeed = Math.floor(Math.random() * 10) + 1;
//   if (dataSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// // adding multiple consicutive data enties creates Callback Hell..like ->
// saveToDB(
//   "Hello World",
//   () => {
//     console.log("Success : Data 1");
//     saveToDB(
//       "Nishit Here",
//       () => {
//         console.log("Success : Data 2");
//         saveToDB(
//           "More Data",
//           () => {
//             console.log("Success : Data 3");
//           },
//           () => {
//             console.log("Bad Connection : Data 3, Failed!!");
//           }
//         );
//       },
//       () => {
//         console.log("Bad Connection : Data 2, Failed!!");
//       }
//     );
//   },
//   () => {
//     console.log("Bad Connection : Data 1, Failed!!");
//   }
// );

// ---------------------------------------------------------------------
// Same task using Promises
// resolve & reject is success and failure elements
// then (in case of resolve) and catch(In case of reject) are paired with promise object

function saveToDB(data) {
  return new Promise((resolve, reject) => {
    let dataSpeed = Math.floor(Math.random() * 10) + 1;
    if (dataSpeed > 4) {
      resolve();
    } else {
      reject();
    }
  });
}

saveToDB("Random")
  .then(() => {
    console.log("Success: Data saved!");
  })
  .catch(() => {
    console.log("Failure: Weak connection!");
  });
// this is for single data only - consicutive data in promise chaining