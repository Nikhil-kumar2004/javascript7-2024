function changecolor(color){
    const body=document.querySelector('body')
    body.style.backgroundColor=color
}

let button=document.querySelectorAll('.button')

button.forEach( (item) =>{
    item.addEventListener('click',() => {
        return changecolor(item.id)
    })
})

//can also do coloring individually witout looping by selection individual element by id.

function changecolor(color){
    const body=document.querySelector('body')
    body.style.backgroundColor=color
  }
  
  let grey=document.getElementById('grey')
  let white=document.getElementById('white')
  let blue=document.getElementById('blue')
  let yellow=document.getElementById('yellow')
  
  grey.addEventListener('click', () => changecolor('grey'))
  white.addEventListener('click', () => changecolor('white'))
  blue.addEventListener('click', () => changecolor('blue'))
  yellow.addEventListener('click', () => changecolor('yellow'))