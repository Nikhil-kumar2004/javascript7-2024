function multiply(num){
    return num*5;
}
multiply.you=2
console.log(multiply(4)) //20
console.log(multiply.you) //2
console.log(multiply.prototype) //{}

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){  //can't do it without prototype keyword.
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)  //only predefined methods are passed not new methods.

chai.increment()
chai.printMe()
//tea.printMe()  //error

//++++++++++++++++++++++++++++++++++++++++++++++++

const heros=["thor","spidy"]
const powers={
    "thor":"hammer",
    spidy:"sling",
    getpowers: function(){
        console.log(` superpower is:${this.spidy}`)
    }
}
powers.getpowers()
Object.prototype.nikhil=function(){     //arrays,functions, objects are passing through Object(are objects)
    console.log("This is my superpower")
}

powers.nikhil()   //This is my superpower
heros.nikhil()    //This is my superpower

Array.prototype.kumar=function(){
    console.log("you are gay")
}
heros.kumar()   //you are gay
//powers.kumar()  //error: not a function.

const anothersuperhero="nikhil "
String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`True length is:${this.trim().length}`)
}
anothersuperhero.trueLength()
"hey".trueLength()
" gay".trueLength()