// event bubbling and delegation
  
  
  // step 1: grab reference element
 const ul = document.querySelector('ul');
 const button = document.querySelector('button');
 console.log(button);//
 
 //step2 : add an eventlistener(typeOfevents,callbackFunction)
 //step3: callback function to fire the action that will happen when the event occurs
 
 button.addEventListener('click', ()=>{
  //  console.log('you clicked me!');
      // ul.innerHTML += '<li>something new!</li>'; //old way of doing this
      //create a new reference element
      const li = document.createElement('li');
      // set textContent for the new element
      li.textContent = 'something new to do';
      // add reference element to the DOM using append() and prepend()
      //append to the parent(ul)
      // ul.append(li);

      //prepend to the parent(ul)
      console.log('tags/element added to the DOM - ',li);
      ul.prepend(li);

  });
  
  //event bubbling..using e.stopPropagation();
  // grab reference element for <li>
  // const items = document.querySelectorAll('li');
  // console.log(items);// 
  // //cycle through li tags and give each of them an event listener
  // items.forEach(item => {
  //   item.addEventListener('click', e => {
  //       console.log(e);
  //       console.log(e.target);
  //       // e.target.style.textDecoration ='line-through';
  //       console.log('event in LI');
  //       e.stopPropagation();// to stop event bubbling...
  //       e.target.remove();
  //   });
  // });


//event delegation
ul.addEventListener('click', e => {
  if(e.target.tagName === 'LI'){
    console.log('tags/element removed from the DOM - ',e.target);
    e.target.remove();
  }
});