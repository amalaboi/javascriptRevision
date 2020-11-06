//keypress - when key is pressed
//keydown - when key is down
//keyup - when key is released
//
//event object argument e,evt
//info about triggered event
//event.type
//event.currentTarget
//this keyword
//preventDefault() - prevents default behaviour
//

const btn = document.querySelector('.btn');
const btns = document.querySelectorAll('.btns');
const h2 = document.querySelector('h2');
const para = document.querySelector('p');
const nameInput = document.querySelector('#name');

// nameInput.addEventListener('keypress',()=>{
//   console.log(nameInput.value);
// });
// nameInput.addEventListener('keydown',()=>{
//   console.log(nameInput.value);
// });
nameInput.addEventListener('keyup',()=>{
  console.log(nameInput.value);
});

h2.addEventListener('click',(e)=>{
  console.log(e.currentTarget);
  console.log(e.target);
  if(e.target.classList.contains('blue')){
    e.target.classList.remove('blue');
  }else{
    e.target.classList.add('blue');
  }
});

//
// testing the difference between currentTarget vs target
////'currentTarget' - always refers to the element to which the 
//event handler has been attached to
//'target' - identifies the element on which the event occured..

btns.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    // e.currentTarget.style.color = 'green';
    // console.log(e.currentTarget);
    e.target.style.color = 'green';
    console.log(e.target);
  });
});