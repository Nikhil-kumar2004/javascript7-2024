function MyFun() {
    let name = "Mozilla"; 
    function displayName() {
        console.log(name); 
    }
    return displayName;
}
MyFun()