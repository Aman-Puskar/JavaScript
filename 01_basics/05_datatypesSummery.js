// primitive datatypes (call by value)

//7 types: String, Number, boolean, null, undefined, Symbol, BigInt


//Non primitive (call by reference)

//array, objects, functions

//symbol -->uniqueness.
const id = Symbol(121);
const nextid = Symbol(121);
// console.log(id === nextid);  //give false becz id and nextid are unique due to 'Symbol';

const bigInt = 4803203920390293230n; //add 'n' it indicates that the number as bigint;
// console.log(bigInt);
// console.log(typeof bigInt);

let myFunc = function () {
    console.log("this is in the function");
}
// console.log(typeof myFunc);


//****************************** Memory************
/*
stack (primitive) ,heap (no  primitive)
-> In stack memory copy of the original is given ,if any change in copy does not affect the original one.
-> In heap memory variable points to the same objects , if any change is done by any of the variable pointing to the same
object will change the main object and result will affect to the every variable pointing to same objects.

*/
 