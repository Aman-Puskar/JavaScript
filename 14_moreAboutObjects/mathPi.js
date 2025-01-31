//to check the properties of the Math module of PI;
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
//  console.log(descripter) //we can not re write the value of pi;

const User =  {
    name : "Aman",
    email : "aman@gmail.com",
    password : "123456789",
    takeUserName : function(){
        console.log("this function is taking user name");
        
    }
};

// console.log(Object.getOwnPropertyDescriptor(User, "name"));

//now we can change the properties of our own object
Object.defineProperty(User, 'name', {
    writable : false,
    enumerable :false,   //iterate prevent
    configurable : false
});

// console.log(Object.getOwnPropertyDescriptor(User, "name"));
User.name = "Amit";
// console.log(User.name); //name has not changed due to fix object properties by defineProperty


//trying to loop on the objects

for (let [key , value] of Object.entries(User)) {
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}