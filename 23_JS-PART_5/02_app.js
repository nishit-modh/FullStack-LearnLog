// obejct of objects

const classInfo = {
  Nishit: {
    gender: "male",
    GPA: 8.22,
    age: 20,
  },
  Dhruvil: {
    gender: "male",
    GPA: 8.36,
    age: 21,
  },
  Nilesh: {
    gender: "other",
    GPA: 7.46,
    age: 20,
  },
};
// Actions in object of objects
console.log(classInfo);
console.log(classInfo.Nilesh)
classInfo.Nilesh.gender = "male";
delete classInfo.Nilesh.GPA;
console.log(classInfo);
console.log(classInfo.Nilesh)


console.log("-------------------Array of Objects--------------------");


// array of objects
const classStuds = [
    {
        name : "Nishit",
        gender: "male",
        GPA: 8.22,
        age: 20,
  },
    {
        name : "Dhruvil",
        gender: "male",
        GPA: 8.36,
        age: 21,
  },
  {
    name : "Nilesh",
    gender: "other",
    GPA: 7.46,
    age: 20,
  },
]

// Actions in array of objects
console.log(classStuds);
console.log(classStuds[2]);
console.log(classStuds[0].name);
classStuds[2].GPA = 8.5; 
console.log(classStuds[2]);