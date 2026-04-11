//when "this" used in normal function - it is called by the parent dirctly (points to the propery of the parent)
//when "this" used in "arrow =>" function - it refers "this" from the scope of the parent ( mostly window due to global scope

const student = {
    name : "Nishit",
    marks : 90,
    scope : this,
    getName : function() {
        console.log(this); //normal function - value of this here is student obeject
        return this.name; // name will be printed (from student obj)
    },
    getMarks : () => {
        console.log(this); //arrow function - value of this here is scope of parent (student object = window)
        return this.marks; // undefined , (cause there is no property of marks in window obj)
    },

    // "this" used in arrow function refers to it's parents this...So it is useful when used with inbuilt functions
    tmInfo1 : function(){
        setTimeout( function(){
            console.log(this); // this will refer to its direct parent, here which is - setTimeout (inbuilt function refering to window)  
        }, 2000)
    },
    tmInfo2 : function(){
        setTimeout( () => {
            console.log(this); // this will refer to "this" of it's parent ("this" of tmInfo2 = student obj)  
        }, 2000)
    } 
}