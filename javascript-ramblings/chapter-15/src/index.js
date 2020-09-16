// index.js

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