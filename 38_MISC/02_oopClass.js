class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    welcome(){
        console.log(`Hello and welcome, ${this.name}`);
    }
}

let newPer = new Person("John", 40)
console.log(newPer)