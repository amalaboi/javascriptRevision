// Foreach Methods and Callbacks

const myFunc = (callbackFunc) =>{
  //do something
  let value = 50;
  callbackFunc(value);
};

// myFunc(function(value){
//   //do something
//   console.log(value);
// });


function callbackFunc(value){
  console.log(value);
}

myFunc(callbackFunc);


//foreach

let people =['mario','luigi','ryu','shaun','chun-li','remi'];

// people.forEach(function(person){
//   console.log('something',person);
// });


// the arrow function version of the above...
people.forEach((person,index) => console.log(index,person));

const logPerson = (person,index) => {
  console.log(`${index}- hello ${person}`);
}

people.forEach(logPerson);