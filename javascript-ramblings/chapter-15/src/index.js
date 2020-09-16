// index.js
import {styleBody,addTitle,contact} from "./dom";
import users, {getPremUsers} from "./data"; // importing a default value is different from the above.



console.log('index file...This is coming from index.js');
addTitle('Testing(index.js)... exports function(addTitle) from dom.js');
styleBody();
addTitle('Hello, world... from the index file..');
console.log(contact);
console.log('users : ', users);

const premUsers = getPremUsers(users);
console.log('premUsers : ', premUsers);
console.log('This is just a Test...after using -w for webpack');

const greet = name => {
  console.log(`hello, my name is ${name}`);
};

greet('mario');
greet('luigi');
greet('link');
greet('Jason');
greet('Gasbey');

class User{
  constructor(){
    this.score = 0;
  }
}