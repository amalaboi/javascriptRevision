// Super()

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
} //end class User

class Admin extends User{

  constructor(username,email,gender,title){
    super(username,email,gender);
    this.title = title;
  }// end of constructor

  deleteUser(user){

    users = users.filter((u)=>{
      return u.username !== user.username;
    });

  }//end of deleteUser()

}// end of class Admin



const userOne = new User('Remi','remi@todoley.com','Male');
const userTwo = new User('Ryu','ryu@email.com','Male');
const userThree = new User('Chun-Li','chun_li@chinaweb.com','Female');
const userFour = new Admin('RaOgun','raogun@amalaboi.com','Male','black-belt ninja');

//array list of all the Users created...
let users = [userOne,userTwo,userThree,userFour];
console.log(users);

//order of argument is important in example userFour 
// User(name,email,gender);
// const userFour = new User('Female','chun_li@chinaweb.com','Chun-Li');

console.log(userOne);
console.log(userTwo);
console.log(userThree);
console.log(userFour);

// userFour.deleteUser(userOne);
// console.log(users);
// userFour.deleteUser(userThree);
// console.log(users);
