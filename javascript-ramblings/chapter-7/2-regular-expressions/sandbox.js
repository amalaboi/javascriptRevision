//regular expressions

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

//test RegEx in Javascript

const userinput = 'shaunp';
const pattern = /^[a-z]{6,}$/;

const result = pattern.test(userinput);
console.log(result); // True or False..if userinput match = true, otherwise false..

if(result){
  console.log('regex test passed');
}else{
  console.log('regex test failed');
}

//another method is the search method
// takes the string.search(pattern)
const userinput2 = '43243shaunpwrwr';
const pattern2 = /[a-z]{6,}/;
let result2 = userinput2.search(pattern2);
console.log(result2);// it will return 5 because position 5 is the match first letter..