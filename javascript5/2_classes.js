class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    getencrypted(){            //no need of function keyword inside classes
        return `${this.password}abc`
    }
}

const user1=new User("nikhil","123@nitkkr.ac.in",123) //classes can't run without new keyword.
            // have to use new whenever this is called and also if more then 1 instance is being created.
console.log(user1)
console.log(user1.getencrypted())

            //behind the scene

// function User(username,email,password){
//     this.username=username
//     this.email=email
//     this.password=password
// }

// User.prototype.getencrypted=function(){
//     return `${this.password}abc`
// }
// const user1=new User("nikhil","123@nitkkr.ac.in",123)
// console.log(user1)
// console.log(user1.getencrypted())

