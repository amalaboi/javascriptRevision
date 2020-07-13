// program to change the background color everytime the button is clicked..

// grab reference element

const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['white','crimson','green','blue','royalblue','hotpink','darkgray','black'];
let counter = 0;
//add event listener

console.log(counter);
body.style.backgroundColor = colors[counter];

button.addEventListener('click', e => {

  // console.log(e);
  // console.log(e.target);
  if(e.target === button){
    counter++;
    
  }
  if(counter === colors.length){
    counter = 0;
  }
  
  body.style.backgroundColor = colors[counter];
  console.log(counter);
});



