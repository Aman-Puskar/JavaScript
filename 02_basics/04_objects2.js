//singleton creation of objects

const user = new Object();
user.id = 1231;
user.name = "Aman";
user.islogged = false;


// console.log(user);


//objects in the object;
const regularUser = {
    email : "abc@gmail.com",
    fullName : {
        userFullame :{ 
            firstName : "Aman",
            lastName : "Puskar"
    }
}
}
// console.log(regularUser.fullName.userFullame.firstName);
const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

const finalObj = {obj1 , obj2}; //will have objects inside the finalObj object;
// console.log(finalObj);
const obj3 = Object.assign( {}, obj1, obj2);
//note -> pass an empty object as the target as assign will return the final merged object so, all the source objects will merged to target and return , this will help when we are merging more than 2 objects,there {} empty object act as a target and make the code morre readable;
// console.log(obj3);

//but mostly we use "spread operator";
const spreadObj = {...obj1, ...obj2};
// console.log(spreadObj);

//when values came from of database;  array of objects;
const userData = [
    {
        name : "Aman",
        email : "xyz@gmail.com"
    },
    {},
    {},
    {},
]
// console.log(userData[0].name);
// console.log(user);
// console.log(Object.keys(user)); // return the array of keys as well as values;
// console.log(Object.entries(user)); //return the array of arrays with key and value pairs;


// we can ask wheather the object has any partcular property or not;

console.log(user.hasOwnProperty('firsrName'));
