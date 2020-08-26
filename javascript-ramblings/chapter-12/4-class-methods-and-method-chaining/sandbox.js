//class methods with method chaining...

class User{
  constructor(username,email,gender){
    //set up properties
    this.username = username;
    this.email = email;
    this.gender = gender;
    this.score = 0;
  }

  login(){
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout(){
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore(){
    this.score += 1;
    console.log(`${this.username} has a Score of ${this.score}`);
    return this;
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

//method calls
// userOne.login();
// userTwo.login();
// userOne.logout();
// userThree.login();
// userTwo.logout();
// userThree.logout();

//method calls 2
userOne.login().incScore().incScore().incScore().incScore().logout();
userTwo.login().incScore().incScore().logout();
userThree.login().incScore().incScore().incScore().logout()