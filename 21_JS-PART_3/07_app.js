// splice : removes | replaces | add elements in place
// splice( start, deleteCount, itemO...itemN)

let students = ["Nishit", "Dev", "Dhruvil", "Vishwa", "Dinal"];
console.log(students);
//to remove last element
console.log(students.splice(-1));
console.log(students);
// to add nilesh and priten after removing dev
console.log(students.splice(1, 1, "Nilesh", "Priten"));
console.log(students);
//add dev at index 3 between priten and dhruvil
students.splice( 3, 0, "Dev");
console.log(students)

// NOTE : splice makes direct changes in the orignal array, unlike slice which just makes changes in a copy