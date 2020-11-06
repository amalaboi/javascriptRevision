//allows select dynamic elements
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default




// selecting element reference
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const heading = document.querySelector('.heading');

// form reference selection
const form =  document.querySelector('#form');
const name =  document.querySelector('#name');
const password =  document.querySelector('#password');


//add eventlistener

//we want to add this heading dynamically...
//heading.addEventListener('click',()=>{
  //console.log('Hello! There..');
//});

btn.addEventListener('click',()=>{
  const element = document.createElement('h1');
  element.classList.add('heading');
  element.textContent = `i'm inside the container`;
  container.appendChild(element);
});

container.addEventListener('click',(e)=>{
  if(e.target.classList.contains('heading')){
    console.log('Hello! There..');
    console.log(e.target);
  }
});


// form eventListener
//localstorage JSON.stringify(), JSON.parse()
// JSON.stringify() converts our form values into JSON strings..
// JSON.parse() to get back our initial values
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log('you clicked submit');
  console.log('name',name.value);
  console.log('password',password.value);
  if(name.value === ''){
    console.log('please enter a valid name!');
    alert('please enter a valid name!');
  }else{
    form.reset();
  }
 
});