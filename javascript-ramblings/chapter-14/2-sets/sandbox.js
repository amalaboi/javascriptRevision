// sets

const namesArray = ['ryu','ken','ryu','shaun'];
console.log('namesArray : ',namesArray);

// using the namesArray values inside a set

const namesSet = new Set(namesArray);
console.log('namesSet : ',namesSet);

// put the set back into an array using spreadSyntax
const uniqueNames = [...namesSet];
console.log('uniqueNames : ',uniqueNames); 

// we could do all of this in one single line...
const uniqueNamesTwo = [...new Set(namesArray)];
console.log('uniqueNamesTwo : ',uniqueNamesTwo); 


// know methods and properties used for Set

const ages =  new Set();
//using the add() to add values into the Sets. add() is also chainable
ages.add(20).add(25).add(30);
ages.add(25); // It won't add to the set because 25 is a duplicate.
console.log(ages);

// using the delete() to remove elements from the Sets..
ages.delete(25);
console.log(ages);

// size property to tell us the length of a sets.
// works like length propery with Array... arrayName.length

console.log(ages, ages.size);

// to check if a set has a certain value inside it we use the has()
// has(value) returns a boolean

console.log(ages.has(20), ages.has(25));

// to clear out the set, to remove all of the values inside the set we use
// the clear()..

ages.clear();
console.log(ages);

// using forEach on Sets...

const ninjas = new Set([
  {name:'shaun',age: 30},
  {name:'crystal',age: 29},
  {name:'ken',age: 32}
]);

ninjas.forEach(ninja => {
  console.log(ninja.name,ninja.age);
});