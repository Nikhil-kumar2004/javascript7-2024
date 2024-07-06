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


// let randomNumber = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert('PLease enter a valid number');
//   } else if (guess < 1) {
//     alert('PLease enter a number more than 1');
//   } else if (guess > 100) {
//     alert('PLease enter a  number less than 100');
//   } else {
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over. Random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage(`You guessed it right`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is TOOO low`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is TOOO High`);
//   }
// }

// function displayGuess(guess) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess} `;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }

// function newGame() {
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);

//     playGame = true;
//   });
// }

