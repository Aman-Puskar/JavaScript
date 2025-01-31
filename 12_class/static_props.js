class User{
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    //static will prevent the access of the object which is initiated by this class
    static createId() {
        const id = parseInt((Math.random()) * 10 + 1);
        return `id of ${this.username} is ${id} `;
    }
}
const userOne = new User('Aman');
console.log(userOne.logMe());
// console.log(userOne.createId());

class teacher extends User {
    constructor(username, email) {
        super(username) ;
        this.email = email;
    }
}

const userTwo = new teacher('Rakesh', 'aman@gmail.com');
// console.log(userTwo.logMe());
console.log(userTwo.createId());