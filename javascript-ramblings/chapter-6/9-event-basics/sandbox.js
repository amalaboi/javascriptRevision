// event basics

// step 1: grab reference element
 const button = document.querySelector('button');
 console.log(button);//
 
 //step2 : add an eventlistener(typeOfevents,callbackFunction)
 //step3: callback function to fire the action that will happen when the event occurs
 
 button.addEventListener('click', ()=>{
   console.log('you clicked me!');
  });
  
  
  // grab reference element for <li>
  const items = document.querySelectorAll('li');
  console.log(items);// 
  //cycle through li tags and give each of them an event listener
  // items.forEach(item => {
  //   item.addEventListener('click', () => {
  //       console.log('item clicked');
  //   });
  // });
  items.forEach(item => {
    item.addEventListener('click', e => {
        console.log(e);
        console.log(e.target);
        e.target.style.textDecoration ='line-through';
    });
  });