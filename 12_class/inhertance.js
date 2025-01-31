class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`user name : ${this.username}`);
    }

    logOut() {
        console.log(`user name: ${this.username} is logged out`);
    }
}

class teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`new course has been added by ${this.username}`);
    }
}

const userOne = new teacher('aman' , 'xyz@mail.com', '1234');
// console.log(userOne.addCourse());
console.log(userOne.logMe())

const userTwo = new User('amit', 'abc@gmail.com', '23332');
// console.log(userTwo.logMe());
// console.log(userTwo.logOut());

console.log(userTwo instanceof User);