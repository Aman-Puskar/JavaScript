//global scope
let a = 99999;


//block scope;
if (true) {
    let a = 20;       //these are decalred in the if block and are not accessable outside of the block;
    const b = 90;
    var c = 99; //but var is accessable;
}
// console.log(a);
// console.log(b);
// console.log(a);

//nested scopes;

function one() {
    const userName = "Aman Puskar";
    function two() {
        const website = "wikipedia";
        console.log(userName);  //website is accesable, because for two, one is global;
        
    }
    // console.log(website); //website is not accesable;
    two();
}
// one();

//********************interesting************************** */

console.log(addOne(9));  //it can be access as the function is defined in noraml form not stored in any varibale;
function addOne(value) {
    return value + 1;
}
// console.log(addOne(9));


console.log(addTow(88)); //here it will give any error, because it function is decalred and stored in a variable and we are trying to access it before the intinalization of the function and variable where it has been stored;
const addTow = function(value) {
    return value + 2;
}
// console.log(addTow(88));
