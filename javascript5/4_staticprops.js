class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ 
        return `123`
    }
}
//Static methods and properties are accessed directly on the class itself, not on instances of the class.

const hitesh = new User("hitesh")
// console.log(hitesh.createId())  //error

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());   //error