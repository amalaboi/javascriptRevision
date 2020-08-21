// topic: delete storage data

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

// delete data from localStorage

// first we use removeItem('key'); which only removes one item
// localStorage.removeItem('name');


// if we wanted to remove all items from localStorage...we use clear() method
localStorage.clear();


name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name);// name is null because name as a key does not exist anymore
console.log(age);// age is null because name as a key does not exist anymore
