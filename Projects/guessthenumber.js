let random=Math.floor(Math.random()*100+1);
const message=document.querySelector(".lowOrHi")
const guessremaining=document.querySelector(".lastResult")
const previousguesses=document.querySelector(".guesses")
const submit=document.querySelector(".guessSubmit")
const num=document.querySelector("#guessField")
const lastpara=document.querySelector(".resultParas")

submit.addEventListener('click',function (e){
  e.preventDefault()
  let guess=num.value
  validateguess(guess)
})
let pguess=[]
let guesscount=1;
let playgame=true;

function validateguess(guess){
  if(playgame){
    if(isNaN(guess) || guess<1 || guess>100){
      alert("enter a valid number")
    }else if(guess > random){
      message.innerHTML="<h2>Your guess is high</h2>"
      message.style.color="red"
      guessedwrong(guess)
    }
    else if(guess < random){
      message.innerHTML="<h2>Your guess is low</h2>"
      message.style.color="red"
      guessedwrong(guess)
    }
    else{
      message.innerHTML="<h2>You guessed it correct.</h2>"
      message.style.color="green"
      endgame();
    }
  }
}
function guessedwrong(guess){
  guessremaining.innerHTML=`${10-guesscount}`
  guesscount++;
  if(guesscount==11){
    message.innerHTML=`<h2>Game over, Number was: ${random}</h2>`
    endgame();
  }
  pguess.push(guess)
  previousguesses.innerHTML=`${pguess}`
}

let button=document.createElement('p')
function endgame(){
  playgame=false;
  const span=document.createElement('span')
  span.innerHTML="Start another game"
  span.style.color="#fff"
  span.style.backgroundClip="#212121"
  button.append(span)
  lastpara.append(button)
  button.addEventListener('click',function (){
    return startgame()
  })
}
function startgame(){
  pguess=[];
  previousguesses.innerHTML=`${pguess}`
  guesscount=1
  guessremaining.innerHTML="10"
  num.value=''
  button.innerHTML=''
  message.innerHTML=''
  playgame=true;
}

