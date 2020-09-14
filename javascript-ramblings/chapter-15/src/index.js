// index.js

const greet = name => {
  console.log(`hello, my name is ${name}`);
};

greet('mario');
greet('luigi');
greet('link');
greet('Jason');

class User{
  constructor(){
    this.score = 0;
  }
}