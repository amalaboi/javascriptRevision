// index.js
import {styleBody,addTitle,contact} from "./dom";

console.log('index file...This is coming from index.js');
addTitle('Testing(index.js)... exports function(addTitle) from dom.js');
styleBody();
addTitle('Hello, world... from the index file..');
console.log(contact);


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