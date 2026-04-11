let colors = ["red", "yellow", "green"];

// index0f : returns index of something
console.log(colors.indexOf("yellow"));

// includes : search for a value
console.log(colors.includes("red"));
console.log(colors.includes("blue"));

// concat : merge 2 arrays
let cars = ["i10", "shift" , "Creta"];
let carcolors = colors.concat(cars);
console.log(carcolors);

// reverse : reverse an array
cars.reverse();
console.log(cars);//changes are made in the orignal array directly

//slice : copies a portion of an array
console.log(carcolors.slice(3));
console.log(carcolors.slice(2, 4));
console.log(carcolors.slice(-2));