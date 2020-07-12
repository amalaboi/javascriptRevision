// creating and removing elements

  //introducing the remove() method....
  // const ul = document.querySelector('ul');
  // ul.remove();
  
  
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
      ul.prepend(li);

  });
  
  
  // grab reference element for <li>
  const items = document.querySelectorAll('li');
  console.log(items);// 
  //cycle through li tags and give each of them an event listener
  items.forEach(item => {
    item.addEventListener('click', e => {
        console.log(e);
        console.log(e.target);
        // e.target.style.textDecoration ='line-through';
        e.target.remove();
    });
  });

