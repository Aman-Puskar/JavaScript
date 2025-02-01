class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email() {
        return this._email.toUpperCase();
    }

    //this will give an error because setter and the contructor both are setting the values
    //so we will change email to _email as the constructor is setting the email but here we overriding the values

    set email(value) {
        this._email = value.toUpperCase();
    }
}

const userOne = new User("abc@gmail.com", "1234567");
console.log(userOne.email);