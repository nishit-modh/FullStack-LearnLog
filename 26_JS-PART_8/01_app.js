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

// not used currently due to "for of" loop does the same work efficiently 