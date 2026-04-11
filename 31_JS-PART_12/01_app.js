// Async Keyword
// Creates an Async Function - which by default returns a promise.

async function greet(name) {
  if (name.length < 10) {
    console.log(`Hello ${name}!!`);
    return ("Nice Name");
  } else {
    throw "Name was too long...";
  }
}

greet("Nishit") // depends on the length of name
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((err) => {
    console.log("Name was not printed: " + err);
  });