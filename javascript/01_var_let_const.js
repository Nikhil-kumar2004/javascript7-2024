const accountId="123@gmail.com" //preferred
let accountpassword="1234" //preferred as it's function scoped,global scoped and block scoped.
var accountname="nikhil's account"// not preferred as not block scoped but function and global scoped.

/* when a variable is declared as var then if other person on file uses same name then no
error is printed but var is reassigned ->except in the case of functions.
*/

accounthandler="nikhil"//definitely not preferred but it does run. //scope is same as var.
account2; //undefined.

console.log(accountId)

console.table([accountId,accountpassword,accountname,accounthandler]) //no error

if(this){
    let key="new"
    var key2="hey"
}
console.log(key2)
console.log(key)//error as let is block scoped.