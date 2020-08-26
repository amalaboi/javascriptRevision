//classes with class constructors

class User{
  constructor(username,email,gender){
    //set up properties
    this.username = username;
    this.email = email;
    this.gender = gender;
  }
}

const userOne = new User('Remi','remi@todoley.com','Male');
const userTwo = new User('Ryu','ryu@email.com','Male');
const userThree = new User('Chun-Li','chun_li@chinaweb.com','Female');
//order of argument is important in example userFour 
// User(name,email,gender);
const userFour = new User('Female','chun_li@chinaweb.com','Chun-Li');

console.log(userOne);
console.log(userTwo);
console.log(userThree);
//order of argument is important
console.log(userFour);