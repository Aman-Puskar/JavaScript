function setUserName(username) {
    this.username = username;
}

function createUser(username, email, password) {
    setUserName(username);
    this.email = email;
    this.password = password;
}

const userOne = createUser('Aman', 'xyz@gmail.com', '123456');
console.log(userOne);