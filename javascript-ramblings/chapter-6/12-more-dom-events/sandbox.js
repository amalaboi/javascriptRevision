// more dom events

// 1- copy event addEventListener('copy')

//first, grab reference element

const copy = document.querySelector('.copy-me');

// add eventListener to reference variable

copy.addEventListener('copy', () => {
  console.log('OI! my content is copyright');
});
// copy event can be used to stop people trying to steal your web content...

// 2-  mouse move event addEventListener('mousemove'); 
//grab reference element
const box = document.querySelector('.box');
// add eventlistener to the reference variable
box.addEventListener('mousemove', e => {
  // console.log(e);
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos: ${e.offsetX} -- y pos: ${e.offsetY} `;
});



//3- wheel event..scrolling up and down... addEventListener('wheel')
// this part we will grab the document object and add an even listener

document.addEventListener('wheel', e => {
  console.log(e.pageX,e.pageY);
});

  
  
 