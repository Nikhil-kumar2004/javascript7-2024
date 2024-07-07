                //setinterval,settimeout,cleartimeout,clearinterval --> functions.
                //these are all a part of browser api, it's runtime environment etc.. and not a part of core js.
                //(see the diagram on events.js to clarify.)

// const changing = setTimeout(() => { //calls the function 1 time after timeout
//     document.querySelector('h1').innerHTML="Nikhil is the best"
// }, 3000);    //==3s
                //here is usally a nameless funtion called handler.

// document.querySelector('#stop').addEventListener('click',()=>{
//     clearTimeout(changing)
//     console.log('stopped')
// })
                //clearTimeout deletes the timeout function from the queue unless it's not executed.

const set=function(data){
    console.log(data)
}
let printing;
document.querySelector('#start').addEventListener('click',function (){
    printing=setInterval(set,2000,"Nikhil")  
})
document.querySelector('#stop').addEventListener('click',function (){
    clearInterval(printing)
})
                //calls the function after the interval(time) indefinite amt of time.
                
                
                
                
                
                
                
                