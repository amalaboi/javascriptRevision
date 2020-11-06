// set initial count
let count = 0;

// grab reference elements
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
const btnContainer = document.querySelector('.button-container');


// console.log(btns);

// Event listener for the buttons...
// This method here uses an eventListener for each button
// This method can be very expensive for example, we have 20 buttons. 
// It can slow down our application. 

// btns.forEach((btn)=>{
//   btn.addEventListener('click',(e)=>{
//      const styles = e.currentTarget.classList;
//      if(styles.contains('decrease')){
//        count--;
//      }else if(styles.contains('increase')){
//        count++;
//      }else if(styles.contains('reset')){
//        count = 0; 
//      }
//      // set color for value fonts
//      if(count > 0){
//        value.style.color = 'green';
//      }
//      if(count < 0){
//        value.style.color = 'red';
//      }
//      if(count === 0){
//        value.style.color = '#222'
//      }
//      value.textContent = count;
//   });
// });



// The second method here...
/* 
  In this method, we use EVENT DELEGATION to capture the click events of the 
  buttons using the default event bubbling..instead of giving each
  buttons their own event listener.... Both methods work but I prefer 
  Event Delegation. So much can be done with it.
*/
btnContainer.addEventListener('click',(e)=>{
  e.stopPropagation();

  const styles =  e.target.classList;
  if(e.target.tagName === "BUTTON"){
    console.log(e.target);
    // console.log(e.currentTarget);
    if(styles.contains('decrease')){
      count--;
    }else if(styles.contains('increase')){
      count++;
    }else if(styles.contains('reset')){
      count = 0;
    }

  }// end of if(target.tagName==='BUTTON')

  if(count > 0){
    value.style.color = 'green';
  }
  if(count < 0){
    value.style.color = 'red';
  }
  if(count === 0){
    value.style.color = '#222';
  }
    // console.log(e);
    value.textContent = count;
});