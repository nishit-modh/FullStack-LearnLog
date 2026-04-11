//for iterating an array
let students = ["Nishit", "Krunal", "Nilesh", "Dev", "Priten"];
for (student of students) {
  console.log(student);
}

//for iterating a string
let myName = "Nishit Modh";
for (char of myName) {
  console.log(char);
}

//for nested array
let heroes = [
  ["Batman", "Superman", "Wonder woman"],
  ["Ironman", "Thor", "Black widow"],
];
for (group of heroes) {
  for (hero of group) {
    console.log(hero);
  }
}
