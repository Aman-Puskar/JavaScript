//note
//falsy values
/*
false , 0, -0, BigInt 0n, "", null, undefind, NaN  
*/

//truthy values;
/* 
true, "0", [], 'false', " "(have space inside the string), function(){}
*/
const userEmail = "aman@gmail.com";
if(userEmail) {
    // console.log(`got the user email successfully!`);
    
} else {
    // console.log(`something went wrong`);
    
}

const obj = {};
if(Object.keys(obj).length === 0) {
    // console.log(`object in empty`);
    
}

//Nullish Coalescing Operator (??) : null undefined

//it is safety check that help to assign the value like if the there is null go for second value;
//get the first value if the value exist;
let val;
// val = 45 ?? 32;
// val = null ?? 10;
val = undefined ?? 55;
// console.log(val);


//terniary operator;
//condition ? true : false
let i = 0;
i < 5 ? console.log(true): console.log(false);

