// array methods => filter methods

const scores = [10,30,15,25,50,40,5];

const filteredScore = scores.filter( score => {
    return score > 20;
} );

console.log('original array : ',scores);
console.log('filtered array : ',filteredScore);

// another example array of objects

const users = [
  {name: 'shaun', premium: true},
  {name: 'yoshi', premium: false},
  {name: 'mario', premium: false},
  {name: 'chun-li', premium: true}
];

const premiumUsers = users.filter( user => {
  return user.premium;
});

console.log('original array : ',users);
console.log('filtered array : ',premiumUsers);