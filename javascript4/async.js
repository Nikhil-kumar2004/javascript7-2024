//setinterval,settimeout,cleartimeout,clearinterval --> functions.
//these are all a part of browser api, it's runtime environment etc.. and not a part of core js.
//(see the diagram on events.js to clarify.)

setTimeout(() => {
    document.querySelector('h1').innerHTML="Nikhil is the best"
}, 3000); //==3s
//usally a nameless funtion called handler.
