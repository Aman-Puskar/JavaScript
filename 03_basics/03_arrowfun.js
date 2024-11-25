const user = {
    name : "Aman Puskar",
    price : 999,
    welcomeMessage : function() { //"this" is used to reffer to current context;
        console.log(`${this.name}, welcome to the website.`);
        console.log(this);  //give the current context i.e all the variables and methods and functions;
        
        
    }
}
// user.welcomeMessage()
// user.name = "Rohan Kapoor"; //changint the name of the user
// user.welcomeMessage();
// console.log(this);  //here "this" is reffering to the global object i.e empty object right now this is way giving the empty object;


//when we use "this" in console then we get the window and other things because there the "this" is reffering to window which is the global current context
//but here in editor we are having empty object as the global current context fot the "this" keyword;

//arow function

function demo () {
    const userName = "Aman Puskar";
    console.log(this.userName); //"this" will not work in function, it will work in only objects
    
}
// demo();

const name = () => {
    const userName = "Aman Puskar";
    console.log(this);
    
}
// name();

const addTow = (n1, n2) => {
    return n1 + n2;
}
// console.log(addTow(2, 4));


//different syntax;
const add = (n1, n2) => n1 + n2;
// console.log(add(23,32));


//note-> when we use {} we have to mention the return statement and if we use (), then no need to write the return statement;

//if we have to return the object,it must be wrap in ();
const obj = () => ({userName : "Aman Puskar"});
// console.log(obj());

// immedialtly invoked function expression (IIFE)
//wrap the function in the () then use  () ,and also help to reduce the globle scope pollution

(function invoked() {
    console.log(`invoked function`);
    
})();  //use semicollen when use two IIFE,to indicate the termination point of particular IIFE;


 ((surname) => (console.log(`hi my name is Aman ${surname}`)))("Puskar");