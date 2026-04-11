const student = {
  name: "Nishit",
  age: 20,
  grades: 8.22,
  city: "Botad",
};
console.log(student.name);

//Create a social media post
const post = {
  username: "@nishit_modh",
  content: "This is a pic of Me!",
  likes: 120,
  comments: 4,
  tagged: ["@intel", "@Germany", "@Australia"],
};
console.log(post.tagged);

// ACTIONS ON OBJECT LITERALS
console.log(student);
//Change property value of object literals
student.city = "Mahesana";
console.log(student);
// if property does not already exist then it gets created
student.gender = "male";
console.log(student);
// for updation, different datatype can be replaced
student.grades = [8.17, 8.26];
console.log(student);
// for deletion of a property
delete student.gender;
console.log(student);