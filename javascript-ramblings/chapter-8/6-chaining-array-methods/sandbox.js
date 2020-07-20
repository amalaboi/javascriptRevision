// Chaining array methods together...

const products = [
  {name: 'gold star', price: 30},
  {name: 'green shell', price: 10},
  {name: 'red shell', price: 40},
  {name: 'banana skin', price: 5},
  {name: 'mushroom', price: 50}
];

console.log(products);

//1.. filtered array for prices > 20...
// const filtered = products.filter(product => {
//   return product.price > 20;
// });

// a shorter version of filtered array..
// const filtered = products.filter(product => product.price > 20);
// // filtered.reverse();

// console.log(filtered);

// // 2.... map array called promo to show promo sentence...
// const promo = filtered.map(product => {
//   return `The ${product.name} is ${product.price/2} pounds.`;
// });


// 3.. using  METHOD CHAINING...
// const promo = products.filter(product => product.price > 20).map(product => {
//      return `The ${product.name} is ${product.price/2} pounds.`;
//  });
//when doing method chaining, always indent...
const promo = products
          .filter(product => product.price > 20)
          .map(product => `The ${product.name} is ${product.price/2} pounds.`);


console.log(promo);