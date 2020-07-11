// if statements...

const age = 25; //program won't run if the value of age is 20.

if(age > 20){
  console.log('you are over 20 years old!');
}
console.log('end of if statement... example 1');


// next example....

const streetFighters = ['shaun','ryu','remi','ken','chun-li'];

if(streetFighters.length > 3){
  console.log("That's a lot of Street fighters for tonight's Arena");
}
console.log('end of if statement... example 2');

// next example...
const passwordOne = 'pass';
const passwordTwo = 'p@ssword';

if(passwordOne.length >= 8){
  console.log('passwordOne','that password is long enough!');
}else{
  console.log('passwordOne','that password is weak!');
}
if(passwordTwo.length >= 8){
  console.log('passwordTwo','that password is long enough!');
}else{
  console.log('passwordTwo','that password is weak!');
}

// else if
if(passwordOne.length >= 8){
  console.log('passwordOne','that password is long enough!');
}else if(passwordOne.length >= 4){
  console.log('passwordOne','that password is cool enough!');
}else{
  console.log('passwordOne','that password is weak!');
}
