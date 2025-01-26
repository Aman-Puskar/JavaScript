// let name = "Aman      ";
// console.log(name.length);
// //we want a property that will give true lenght of string and does not include the white spaces


let heros = ['superman', 'ironman'];

let powers = {
    superman : 'fly',
    ironman : 'weapons',
    getSupermanPower : function() {
        console.log(`got the power of ${this.superman}`);
    }
}


//creating aman function to the base object so that all which passes by the object must have aman function
//now all have aman functoin whether it is object or array
Object.prototype.aman = function() {
    console.log('aman is present in the all object')
}
// powers.aman();
// heros.aman();

//now let us try to make a function to the array level and check whether it will be present in the object or not as creting function in the object is accessable in the array or objects

Array.prototype.sayMyName = function () {
    console.log('this is in the array function');
}
// heros.sayMyName(); //sucess
// powers.sayMyName(); //failer as accepted


//inhertance
const user = {
    userName :"aman",
    email : "aman@gamil.com"
}
const teacher = {
    makevideo : true
}
//can also make prototypal inheritance outside of the object
// teacher.__proto__ = user;
const teacingSupport = {
    isAvailable : false,
    __proto__ : teacher //having access of the teacher object
}



//moder syntax 
Object.setPrototypeOf(teacher , user); //kiske andr kiski chahiye


//solving upper problem

let anotherString = "aman    ";

String.prototype.trueLength = function() {
    console.log(this); //value is refernece to the variable from which we have called the trueLength function
    
    console.log(`true length is ${this.trim().length}`);
}
anotherString.trueLength();