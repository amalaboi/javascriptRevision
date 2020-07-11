//Logical Operators :
// OR  ||
// AND &&

// const password = 'p@ss';
// const password = 'p@ssword123456';
const password = 'password123456';
if(password.length >= 12 && password.includes('@')){
  //code block
  console.log('The password is mighty strong!');
}else{
  console.log('Please enter a valid password. It must be atleast 12 letters and must include an @ sign');
}

const pass = 'p@ss';
if(pass.length >=5 || pass.length >= 12 && pass.includes('@'))
{
  // code block
  console.log('combination logical operators checker. Password is OK!');
}else{
  console.log('combination logical operators checker. Password is WRONG!');
}