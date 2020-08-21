// topic -- stringifying and parsing data..

const todos = [
  {text:'play mariokart', author: 'shaun'},
  {text:'buy some milk', author: 'mario'},
  {text:'buy some bread', author: 'luigi'}
];

// console.log(JSON.stringify(todos));
// 

// now we will store the JSON string in the localStorage
localStorage.setItem('todos',JSON.stringify(todos));

// now we will retreive our saved item
const stored = localStorage.getItem('todos');
// console.log(stored);

// now we will convert stored data which is a JSON string into an array of
// objects using the JSON.parse(stored) method..

const todos2 = JSON.parse(stored);
console.log('todos',todos);
console.log('todos2',todos2);
// console.log(JSON.parse(stored));