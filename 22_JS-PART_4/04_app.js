let names = ["Nishit", "Krunal", "Nilesh", "Dev", "Priten"];
//iterating an array using for loop
for (let i = 0; i < names.length; i++) {
  console.log(i, names[i]);
}

//iterating nested or multi-dimentional array
let heroes = [
  ["Batman", "Superman", "Wonder woman"],
  ["Ironman", "Thor", "Black widow"],
];
for (i = 0; i < heroes.length; i++) {
  for (j = 0; j < heroes[i].length; j++) {
    console.log("j = " + j, heroes[i][j]);
  }
}