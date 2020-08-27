//Prototype model and Inheritance

// class User{
//   constructor(username,email,gender){
//     //set up properties
//     this.username = username;
//     this.email = email;
//     this.gender = gender;
//   }
// }

//using constructor function for the above class
function User(username,email,gender){
  this.username = username;
  this.email = email;
  this.gender = gender;
}

User.prototype.login = function(){
  console.log(`${this.username} has just logged in...`);
  return this;
}

User.prototype.logout = function(){
  console.log(`${this.username} has just logged out...`);
  return this;
}

function Admin(username,email,gender,title){
  User.call(this,username,email,gender);
  this.title = title;

}

Admin.prototype = Object.create(User.prototype);

const userOne = new User('Remi','remi@todoley.com','Male');
const userTwo = new User('Ryu','ryu@email.com','Male');
const userThree = new User('Chun-Li','chun_li@chinaweb.com','Female');
const admin = new Admin('Roko','roko@ogunde.com','Male','crow-bar-specialist');


console.log(userOne);
console.log(userTwo);
console.log(userThree);
console.log(admin);
userOne.login().logout();
userTwo.login().logout();
userThree.login().logout();
admin.login().logout();


