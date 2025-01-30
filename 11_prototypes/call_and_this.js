function getUserName(username) {
    this.username = username;

}

function createUserName(username, email, password) {
    getUserName.call (this, username); //set value in my 'this'   
    this.email = email;
    this.password = password;
}

const userOne = new createUserName('Aman', 'abc@gmail.com', '12344');
console.log(userOne);