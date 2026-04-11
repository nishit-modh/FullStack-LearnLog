//"This" keyword refers to an object that is executing the current piece of code.

let student = {
    name: "Nishit",
    physics: 82,
    Maths: 80,
    chemistry: 84,
    avgMarks(){
        let avg = (this.physics + this.Maths + this.chemistry) / 3 ;
        return avg;
    }
} 