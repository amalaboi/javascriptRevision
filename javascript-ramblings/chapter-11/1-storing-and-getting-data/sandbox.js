// topic: storing and getting data

// store data in local storage
// localStorage.setItem('key','value');
localStorage.setItem('name','mario');
localStorage.setItem('age',50);




// get data from local storage
// localStorage.getItem('Key');
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name);
console.log(age);



// updating data

localStorage.setItem('name','luigi');
//we could also use the dot notation to update item
localStorage.age = '40';

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name);
console.log(age);
// localStorage.name = 'raymond';
// console.log(name);