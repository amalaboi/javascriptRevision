//Three core principles of event

//1 - select element/ reference..

//2 - addEventListener()
//3- (what event, what to do) --> parameters inside addEventListener..


//1
const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');
const para = document.querySelector('p');

//2
btn.addEventListener('click',()=>{
  console.log('hey! you clicked me.');
  // heading.classList.add('red');
  let hasClass = heading.classList.contains('red');
  if(hasClass){
    heading.classList.remove('red');
  }else{
    heading.classList.add('red');
  }
});

para.addEventListener('click',()=>{
  let hasClass = para.classList.contains('blue');
  if(hasClass){
    para.classList.remove('blue');
  }else{
    para.classList.add('blue');
  }
});