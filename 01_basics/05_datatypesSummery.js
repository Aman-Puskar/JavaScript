// primitive datatypes (call by value)

//7 types: String, Number, boolean, null, undefined, Symbol, BigInt


//Non primitive (call by reference)

//array, objects, functions

//symbol -->uniqueness.
const id = Symbol(121);
const nextid = Symbol(121);
// console.log(id === nextid);  //give false becz id and nextid are unique due to 'Symbol';

const bigInt = 4803203920390293230n; //add 'n' it indicates that the number as bigint;
console.log(bigInt);
console.log(typeof bigInt);

let myFunc = function () {
    console.log("this is in the function");
}
console.log(typeof myFunc);
