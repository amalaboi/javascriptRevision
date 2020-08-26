//Object Literal Recap

// Object literal isn't the best way of creating objects and we will see why?

const userOne = {

    username: 'ryu',
    email: 'ryu@thenetninja.co.uk',
    login(){
      console.log('the user logged in');
    },
    logout(){
      console.log('the user logged out');
    }

};

console.log(userOne.username, userOne.email);
userOne.login();

// image we want to create another user object(userTwo) using object literal..
//we will have to copy the above code again...

const userTwo = {

  username: 'ken',
  email: 'ken@thenetninja.co.uk',
  login(){
    console.log('the user logged in');
  },
  logout(){
    console.log('the user logged out');
  }

};

console.log(userTwo.username, userTwo.email);
userTwo.login();