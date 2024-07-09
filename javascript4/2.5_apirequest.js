// API - talking language between 2 systems. e.g. randomuser.me
//JSON formatter can be used to convert complex api into simple to see fromat.

//below is the way use to fetch api for years but .fetch replaced all these in recent time.

const requesturl="https://jsonplaceholder.typicode.com/users"
const xhr= new XMLHttpRequest()
xhr.open('GET',requesturl)
xhr.onreadystatechange= function(){
    console.log(xhr.readyState);
    if(xhr.readyState==4){
        const data=JSON.parse(this.responseText)
        console.log(data.followers)
    }
}
xhr.send()

//V8 engine runs javascript purely and implemented using C++
//as C++ is the core language so,js,python... are rappers onto the C++.