//mostly events run sequentially but there are some exceptions also.

//<li><img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" onclick="alert('owl')"></li>
//-->not recommended as this is not scalable in large projects.

// document.getElementById('owl').onclick = function (){
//     alert('owl');
// }
            //not recommended as it gives less features and less information.

            //event listener is a powerful approach that we'll be using and can listen to various
            //events.

            // attachEvent()
            // jQuery - on

            // type, timestamp, defaultPrevented
            // target, toElement, srcElement, currentTarget,
            // clientX, clientY, screenX, screenY
            // altkey, ctrlkey, shiftkey, keyCode

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log(e)
// },false)    //by default it's false so can be skipped.
            //called event propagation.(useCapture parameter.)
            //false--> event bubbling -->capturing is bottom to top
            //true--> event capturing -->top to bottom

// document.getElementById('images').addEventListener('click',function(e){
//     console.log('clicked inside the images')
// },false)

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log('clicked on the owl')
// },false)

            //output: clicked on the owl
            //        clicked inside the images

// document.getElementById('images').addEventListener('click',function(e){
//     console.log('clicked inside the images')
// },true)

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log('clicked on the owl')
// },true)

            //output: clicked inside the images
            //        clicked on the owl

// document.getElementById('images').addEventListener('click',function(e){
//     console.log('clicked inside the images')
// },false)

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log('clicked on the owl')
//     e.stopPropagation() // will not move to the next in line event.
// },false)

// document.getElementById('google').addEventListener('click',(e) =>{
//     console.log('google clicked.')
//     e.preventDefault()
// })
// //

// document.getElementById('images').addEventListener('click',(e) =>{
//     console.log(e.target)
// })
            //It gives from which target this event is occuring e.g.on clicking 1st image we get
            //the whole image tag and it's html of first image.

//console.log(e.target.parentNode)
            //It will give the parent element also like: <li><img>..<img><li>

// document.getElementById('images').addEventListener('click',(e) =>{
//     const removeit=e.target.parentNode
//     removeit.remove()
//     //removeit.parentNode.removeChild(removeit) //firstly go to ul the go the li and remove
// })

//There is a issue that if i click near image then li gets clicked and li have parent as ul so whole ul gets deleted.

document.getElementById('images').addEventListener('click',(e) =>{
    console.log(e.target.tagName)  // e.g IMG,LI
    if(e.target.tagName ==='IMG'){
        let removeit=e.target.parentNode
        removeit.remove()
    }
})



