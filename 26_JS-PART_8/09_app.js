// Storing values of array into multiple variables

let ranks = [ "Nishit", "Dev" , "Priten" , "Dhruvil" , "Vishwa" , "Nilesh" , "Dinal"];
let [winner, runnerUp, secondRunnerUp, ...others] = ranks;

// Destructuring in objects
let student = {
    name: "Nishit",
    marks: 82,
    subjects: ["AI", "WD", "Data Science", "Maths"],
    city: "Mahesana",
    username: "njm7434",
    password: "This is pass"
}
let { name, marks} = student; // it will match key with the obejct and fetch the key with same name

let { username : user , password : key, city : place = "Ahemdabad"} = student; // will take username as user and password as pass, city and place and it's default value as "Ahemdabad if city is empty" 