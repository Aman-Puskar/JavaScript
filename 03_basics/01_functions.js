//lines of code packed in a block and can be used to as many times as we want;
function myName() {
    console.log("Aman Puskar");
    
}

// myName();
// function addTowNumber(n1, n2) {
    // return n1 + n2;
    // console.log(n1 + n2);
    
// }
// addTowNumber(10, 23);
// const res = addTowNumber(20,  19);
// console.log(res);   //undefined ,as the function is not returning anything just printing on the console,


function addTowNumber(n1, n2) {
    return n1 + n2;
    
}
const result = addTowNumber(12, 12); //function return the stored in result;l
// console.log(result);

function loginUserMessage(userName) {    //userName = "any name"  -->as default;
    if(userName === undefined) { //if does not passed as a argument;
        console.log("enter the user name");
        return;
        
    }
    return `${userName} just logged into the website`;
}
// console.log(loginUserMessage("Aman"));
// console.log(loginUserMessage());


//when we dont know how many arguments are going to come;

function calTotalSum(...sum) {
    return sum;
}
// console.log(calTotalSum(100, 200, 300));

const user = {
    userName :"Aman",
    price : 300
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject["userName"]} and the price is ${anyObject["price"]}`);
    
}
// handleObject(user);

//passing the array;
const ar = [121, 1321, 343, 12312];

function returnThirdValue(anyArray) {
    return anyArray[2];
}
console.log(returnThirdValue(ar));





