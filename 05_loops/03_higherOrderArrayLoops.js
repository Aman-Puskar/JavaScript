//for of loop

const ar = [11221, 222, 322, 433, 5212, 6212];
// for (const val of ar) {
//     console.log(val);
    
// }
const name = "Aman Puskar";
for (const element of name) {
    // console.log(element);
        
}

//maps   --> stores the unique values and stored in same order in which they are stored;

const map = new Map();
map.set('IN' , "India");
map.set('USA' , "United Stated of America");
// console.log(map);

// for (const [key, value] of map) {
//     console.log(key,": ", value);
    
// }



//forof loop is not working for objects
// const obj = {
//     1 : "Aman",
//     2 : "Amit", 
//     3 : "Rohan"
// };

// for (const [key, value] of obj) {   
//     console.log(key, ":", value);
    
// }


//forin loop for objects;
const obj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
};
// for (const key in obj) {
//     console.log(`${key} for  ${obj[key]}`);
    
// }
//try for in loop for the array;

// for (const key in ar) {
    // console.log(key); //it will give only indices not the value just like the forof loop
    // console.log(ar[key]);  
    
// }






//for each loop;

const arr = [ 9898, 98989888, 2322, 1121,33433];
// arr.forEach( function (item) {console.log(item);
// })

// arr.forEach((item) => {
//     console.log(`item is ${item}`);
    
// })


//make the function then pass it to the forEach loop;
// const fun = (item) => {
//     console.log(item);
    
// }
// arr.forEach(fun);


//forEach loop have many parameters
// arr.forEach((val, idx, newAr) => {   //val , index and whole array
//     console.log(val, idx, newAr);
    
// })

const myArr = [
    {
        language : "English"
    },
    {
        name : "Aman Puskar"
    },
    {
        city : "Greater Noida"
    }
]

myArr.forEach((obj) => {
    console.log(obj.language);
    
})