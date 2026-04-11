// let newArr = arr.map(some function definition or name);
// it creates new array with some changes applied to orignal array

let num = [1, 2, 3, 4, 5];

let doubleNum = num.map((el) => el * 2);

let students = [{
    name : "Nishit",
    marks : 99
},
{
    name : "Dev",
    marks : 97
},
{
    naem : "Priten",
    marks : 89
}];

students.forEach( (student) => {
    console.log(student.marks);
})

let GPA = students.map( (student) => {
    student.marks /= 10;
    return student;
})