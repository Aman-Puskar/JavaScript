const promiseOne = new Promise(function(resolve, reject){
    //do async task
    setTimeout(()=>{
        console.log("This is inside the promise");
        resolve();//linkage with (then) and value is return to (then)
    },1000)
}); 


//consuming the promise
//execute when resolve occur;
promiseOne.then(function(){
    console.log("sucess!");
})

//another method to write the promise
new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("This is another promise");
        resolve();
    },1000)
}).then(function(){
    console.log("sucess for another promise");
    
})



const promiseThree = new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve({username: "Aman", city: "noida"});
        },1000)
}).then(function(userInfo) {
    console.log(userInfo);
    
})



const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username : "Aman", password : "1234"});
        } else {
            reject("ERROR! occured");
        }
    }, 1000);
})

promiseFour
.then((userInfo) => {
    console.log(userInfo);
    return userInfo.username;     //this returned a value is given as chain that it another .then --> argument
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error) {
    console.log(error);
})
.finally(function() {
    console.log("done with resolve or reject.");
    
})




//handling with async await
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username : "amanFive", password: "9876"});
        } else {
            reject("Error in promise five")
        }
    }, 1000) 
})

async function promiseFiveConsumed() {
    // const response = await promiseFive;
    // console.log(response);              //this will not handle error directly
    
    try {
        const response = await promiseFive;
        console.log(response); 
    } catch (error) {
        console.log(error);
        
    }
}
promiseFiveConsumed();

// console.log("Aman Puskar")



// async function getData() {
//     try{
//             const response = await fetch('https://jsonplaceholder.typicode.com/users');
//             const data = await response.json(); //converting into json takes time so add await
//             console.log(data);
    
//     } 
//     catch (error) {
//         console.log(error);
        
//     }
// }

// getData();





fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
        return response.json();
})
.then((result) => {  //handling the retured value from first .then
    console.log(result);
})
.catch((error) => {
    console.log("E", error);
    
})