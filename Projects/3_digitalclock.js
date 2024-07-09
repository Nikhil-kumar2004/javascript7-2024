const clock=document.getElementById('clock')
function updatetime(){
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString()
}
updatetime()
setInterval(updatetime,1000)
