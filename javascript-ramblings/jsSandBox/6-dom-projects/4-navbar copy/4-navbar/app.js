// grab reference element
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
// add event listener
navToggle.addEventListener('click',()=>{
  // console.log('navToggle in the house');
  // if(links.classList.contains('show-links')){
  //   links.classList.remove('show-links')
  //   console.log('links off');
  // }else{
  //   links.classList.add('show-links');
  //   console.log('links on');
  // }
  // same as above using toggle()
  links.classList.toggle('show-links');
});