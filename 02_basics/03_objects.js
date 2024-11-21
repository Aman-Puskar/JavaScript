//singleton  (Object.create) -> constructor method to create object;
//object literals


// const sym = Symbol("key1");
const user = {
    name : "Aman",   //behind the scence the key are treated as string;
    "full name" : "Aman Puskar", //only access by giving as string;
    age : 23,
    address : "noida",
    email : "xyz@gmail.com",
    islogged : false,
    lastSeen : ["monday", "saturaday"],
    // sym : "it is key",
    // [sym] : "it is the main key"
};
// console.log(user.name); //no need to give as string;
// console.log(user["name"]); //giving  string, as key are treated as string; 
// console.log(user["full name"]);
// console.log( typeof user.sym); //gives as string;
// console.log( typeof user[sym]);

//changing the values in obect;
user.name = "Rohan Kumar";
// console.log(user["name"]);
// Object.freeze(user);   //does not allow any change in the object user;
user.name = "Amit Kumar";
// console.log(user["name"]);

user.greet = function() {
    console.log("this is in the fuction..");
    
}
user.greet2 = function () {
    console.log(`this is the name of person ${this.name}`);
    
}
console.log(user.greet()); //(greet) will give only function reference not the excuated function;
console.log(user.greet2());








