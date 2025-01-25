//object literals  -->collections of properties and methods
const user = {
    username : "Aman Puskar",
    email : "aman@gmail.com",
    isloggedIn : true,
    getUserInfo : function() {
        return 'this is in the method of user object';
    }
};
// console.log(user.getUserInfo());

//constructor function  -->(new ) this is used to create new execuational context;

function userData(username, isLoggedIn) {
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.greet = function() {
        console.log(`welcome ${this.username}`);
        
    }
    // return this;  //it will give all the values inside the function

}
const userOne  = userData('Aman', true);
// console.log(userOne);  //this will give normal values but when we make another 
//user from userData then values of new user will override the variables of userData 
//and when we try to get values of userOne then values of new user will come as it overrides the previous values
const userTwo = userData('Roahn', false);
// console.log(userOne); //this will give values from userTwo as it has overrides the value of userOne

//so to avoid this we use 'new' keyword
const userThree = new userData('Amit', true);
console.log(userThree);
const userFour = new userData('pankaj',false);
// console.log(userThree); // it will normal userThree values as it has it own context;
