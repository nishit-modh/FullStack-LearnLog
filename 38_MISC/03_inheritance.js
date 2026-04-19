class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, I am ${this.name}`);
  }
}

class Student extends Person {
  constructor(rollno, name, age) {
    super(name,age)
    this.rollno = rollno;
  }
  asks() {
    console.log(`${this.name} is asking a Question.`);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name,age)
    this.subject = subject;
  }
  answer() {
    console.log(
      `${this.name} is answering a question on ${this.subject} to a student!`
    );
  }
}

let rn10 = new Student(10, "Robert", 16);
let rn11 = new Student(11, "Liza", 15);
let mathTec = new Teacher("Alex", 45, "Math");
