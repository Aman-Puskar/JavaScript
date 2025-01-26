//javascript shows the prototypal behavioural that going parent to parent

//array ---------> objects --------------->null

function multiplyby5(num) {
    return num*5;
}
multiplyby5.power = 2;  //function in also a object
console.log(multiplyby5(2));
console.log(multiplyby5.power)
console.log(multiplyby5.prototype)

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

//we can add our function in the prototypes as the function is also a object only
createUser.prototype.increment = function () {
    this.score ++;  //jis ne bulaya hoga uska he score he badhana hai
}


createUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`)
}
const userOne = new createUser('aman', 32); // if it has been not given bydefault function inside the function then new is must be used so that it can have all the fucntion which are given in outside

const unserTwo = createUser('amit', 43);
userOne.printMe();