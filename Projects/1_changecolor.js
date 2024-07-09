//Not good //Issue: when i click start again then speed increases -->edge case.

// const s=document.getElementById('start')
// const e=document.getElementById('stop')
// let b=document.querySelector('body')
// let set;
// const arr=['red','blue','green']
// let i=0;
// s.addEventListener('click',() =>{
//   set=setInterval(()=>{
//     b.style.backgroundColor=arr[i%3]
//     i++;
//   },1000)
// })
// e.addEventListener('click',() =>{
//   clearInterval(set)
// })


//Better:

// const s=document.getElementById('start')
// const e=document.getElementById('stop')
// let b=document.querySelector('body')
// let set;
// const arr=['red','blue','green']
// let i=0;
// s.addEventListener('click',() =>{
//   if(!set){
//       set=setInterval(()=>{
//       b.style.backgroundColor=arr[i%3]
//       i++;
//     },1000)
//   }
// })
// e.addEventListener('click',() =>{
//   clearInterval(set)
//   set=null
// })

//Best:

const s=document.getElementById('start')
const e=document.getElementById('stop')
let b=document.querySelector('body')
let set;
let i=0;
const randomcolor=function(){
  const hex='0123456789ABCDEF'
  let color="#"
  for(let i=0;i<6;i++){
    color+=hex[(Math.floor(Math.random()*16))]
  }
  return color
}
function generate(){
  b.style.backgroundColor=randomcolor()
}
s.addEventListener('click',function(){
  if(!set)
    set=setInterval(generate,1000)
})

e.addEventListener('click',function(){
  clearInterval(set)
  set=null;
})

