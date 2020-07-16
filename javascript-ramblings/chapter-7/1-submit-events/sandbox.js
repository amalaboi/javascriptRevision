//submit events

// grab reference element for the form

const form = document.querySelector('.signup-form');
const username =  document.querySelector('#username');
// addEventListener('submit) to the form

form.addEventListener('submit', e => {
  e.preventDefault(); // prevents the form from refreshing
  // console.log(username.value);
  console.log(form.username.value);
  alert(form.username.value);

});