//app quiz

//correct answers array
// this array holds the correct answers for the questions and the
// user answers will be compared to the array to know which is right or wrong.
const correctAnswers = ['B','B','B','B'];

//grab the form reference element
const form = document.querySelector('.quiz-form');
//grab the result display reference element
const resultDisplay  = document.querySelector('.result');

//add eventListener(submit)

form.addEventListener('submit', e => {
  e.preventDefault();// avoid page refresh..
  let score = 0;
  const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
  
  //check correct answers
  userAnswers.forEach((answer,index) => {
    if(answer === correctAnswers[index]){
        score += 25;
    }
  });

  //show result on html page
  console.log(score);
  //page to scroll back to the top of the page once submit is pressed
  // window.scrollTo(x,y);
  scrollTo(0,0);

  //remove the display:none; => bootstrap class = d-none
  resultDisplay.classList.remove('d-none')
  // grab reference element for span inside resultDisplay
  // resultDisplay.querySelector('span').textContent = `${score}%`;
  


  let outputCounter = 0;
  // set variable for setInterval()
  const timer = setInterval( ()=>{
  // grab reference element for span inside resultDisplay
  resultDisplay.querySelector('span').textContent = `${outputCounter}%`;
    if(outputCounter === score){
      clearInterval(timer);
    }else{
      outputCounter++;
    }
  }, 10);

});


//window object (global object)

// console.log('hello');
// window.console.log('hello'); // both the same as above

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form')); // both are the same

// alert('hello');
// window.alert('hello');

// setTimeout() and setIntervals()
// Both methods take a callback function as the first argument
//and a millisecond integer as second argument

// setTimeout( ()=>{
//   alert('hello ninja');
// },3000); // This fires 3 seconds after the page loads

// let counter = 0;
// const timer = setInterval( () => {
//   console.log('hello ninja');
//   counter++;
//   if(counter === 5){
//     clearInterval(timer);
//   }
// }, 1000); // This fires every 1 second until counter = 5 and then it stops(clearInterval(variablename))