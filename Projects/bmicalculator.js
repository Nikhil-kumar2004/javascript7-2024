const form=document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const h=parseInt(document.getElementById('height').value)
  const w=parseInt(document.getElementById('weight').value)
  const result=document.querySelector('#results')
  if (w && h) {
    let bmi = (w / ((h * h)/10000)).toFixed(1);
    result.innerHTML = `Your BMI: ${bmi}`;
  } else {
    result.innerHTML = 'Please enter both height and weight';
  }
})

//as we don't have button as submit so apply on form.
//h,w are taken inside the listener as if we had taken it earlier then at that time value is not given to h
// and w would be empty.

const height=document.getElementById('height')
const weight=document.getElementById('weight')
let h;
let w;
height.addEventListener('input', (e) => {
  h=parseFloat(e.target.value);
})
weight.addEventListener('input', (e) => {
  w=parseFloat(e.target.value);
})

const result=document.getElementById('results')
const forms=document.querySelector('form')

forms.addEventListener('submit', (e) => {
  e.preventDefault()
  if (w && h) {
    let bmi = (w / ((h * h)/10000)).toFixed(1);
    result.innerHTML = `Your BMI: ${bmi}`;
  } else {
    result.innerHTML = 'Please enter both height and weight';
  }
})

//  3)

const formss = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

formss.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


