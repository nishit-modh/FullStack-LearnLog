// constructor function - don't return anything and start with a capital
function Person(name,age){
    this.name = name;
    this.age = age;
}

// to add univarsal function in constructor -> addition in prototype of constructor function
Person.prototype.hi = function(){
    console.log(`Hello and welcome, ${this.name}`);
}

let per1 = new Person("Nishit", 24)
console.log(per1)