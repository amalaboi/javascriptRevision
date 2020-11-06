//click - fires after full action occurs
//mousedown - button is pressed
//mouseup - button is released
//mouseenter - moved onto an element
//mouseleave - moved out of an element

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

//*note.. click events occurs when both mousedown and mouseup events have occured
btn.addEventListener('click',()=>{
  console.log('you clicked me!');
});

btn.addEventListener('mousedown',()=>{
  console.log('mouse -- down');
});

btn.addEventListener('mouseup',()=>{
  console.log('mouse -- up');
});

// mouseenter and mouseleave together acts like hover effect

heading.addEventListener('mouseenter',()=>{
  heading.classList.add('blue');
});
heading.addEventListener('mouseleave',()=>{
  heading.classList.remove('blue');
});