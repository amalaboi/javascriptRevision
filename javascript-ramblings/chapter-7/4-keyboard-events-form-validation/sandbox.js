//keyboard events and form validation


// grab reference element for the form

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

//const username =  document.querySelector('#username');


// addEventListener('submit) to the form

form.addEventListener('submit', e => {
  e.preventDefault(); // prevents the form from refreshing
  const username = form.username.value;// store the form value inside a variable
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

// live feedback using keyboard event.. addEventListener('keyup')
form.username.addEventListener('keyup',e => {
  //console.log(e.target.value, form.username.value);
  if(usernamePattern.test(e.target.value)){
      console.log('passed');
      form.username.setAttribute('class','success');
    }else{
      console.log('failed');
      form.username.setAttribute('class','error');
  }
});
