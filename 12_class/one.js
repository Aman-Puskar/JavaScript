//after ES6
class User{
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() { 
        return `${this.password}xyz`;
    }
}


const userOne = new User('Aman', 'aman@gmail.com', 1234);
console.log(userOne);
console.log(userOne.encryptPassword())