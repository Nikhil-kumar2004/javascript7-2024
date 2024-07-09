// function setUsername(username){
//     this.username=username
//     console.log("called")
// }

// function createUser(username,email,password){
//     setUsername(username)
//     this.email=email
//     this.password=password
// }
// const user1=new createUser("nikhil","123@fb.com",123)
// console.log(user1)

            //Output: called
            //createUser { email: '123@fb.com', password: 123 }

            //so, the inside function is getting called but that function stores the defined username in his context and 
            //not able to hold on the value outside the function.

function setUsername(username){
    this.username=username
    console.log("called")
}

function createUser(username,email,password){
    setUsername.call(this,username)   //holds onto the reference as reference of parent function is passed.
    this.email=email
    this.password=password
}
const user1=new createUser("nikhil","123@fb.com",123)
console.log(user1)

            //Output: called
            //createUser { username: 'nikhil', email: '123@fb.com', password: 123 }

// The issue arises because when you call setUsername(username) inside the createUser function, it is not 
// being called in the context of the new object being created. Instead, it is called in the global context 
// (or undefined in strict mode), which means this inside setUsername does not refer to the new createUser 
// object.