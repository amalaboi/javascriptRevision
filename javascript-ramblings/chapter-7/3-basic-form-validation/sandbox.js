//basic form validation


// grab reference element for the form

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
//const username =  document.querySelector('#username');


// addEventListener('submit) to the form

form.addEventListener('submit', e => {
  e.preventDefault(); // prevents the form from refreshing
  const username = form.username.value;// store the form value inside a variable
  const usernamePattern = /^[a-zA-Z]{6,12}$/;
  let result = usernamePattern.test(username);
  // console.log(result);
  if(result){
    feedback.style.color = 'blue';
    feedback.style.textAlign = 'center';
    feedback.textContent = 'the username is valid!';
    console.log('regex test passed...');
  }else{
    feedback.style.color = 'red';
    feedback.style.textAlign = 'center';
    feedback.textContent = 'the username is invalid! username must contain letters only & be between 6 and 12 characters long!';
    console.log('regex test failed...');
  }

});

