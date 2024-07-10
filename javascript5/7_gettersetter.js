// getter and setter is used when we need fine grain control e.g. if a user want's password then return him
// encrypted password,no password, error ...etc.
class User{       //(**)(90%)
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){            //will always return.
        return this._password.toUpperCase();         //_password is used as private property.
    }
    set password(value){      //setter does not returns
        this._password=value;   //if this.password will be used then constructor and set both will try to modify
        //password and race condition would have occured and Rangeerror: max. stack size reached.
    }
}
const user1=new User("123@gmail.com","abc")
console.log(user1.password)  //ABC
console.log(user1.email)     //123@gmail.com

//on objects  //rare
const Obj={
    _email: "123@gmail.com",
    _password: 123,

    get emails(){
        return this._email.toUpperCase()
    },
    set emails(value){
        this._email=value
    }
}
const user2=Object.create(Obj)
console.log(user2.emails);
//getter and setter is a special methods that is placed on the top of properties, therefore user2.emails()
// is invalid.

//e.g. in .length property of array we can't set the value intead it's calculated and implemented using 
//setter and getter in which they are setting the value but not taking value from us