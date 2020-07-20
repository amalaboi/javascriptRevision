// array methods => map methods
const prices = [20,10,30,25,15,40,80,5];

// map() to create new array of salePrices

const salePrices = prices.map(price => {
  return price / 2;
});

console.log('original array   : ', prices);
console.log('mapped new array : ', salePrices);

//example two: array of objects

const products = [
  {name: 'gold star', price: 20},
  {name: 'mushroom', price: 40},
  {name: 'green shells', price: 30},
  {name: 'banana skin', price: 10},
  {name: 'red shells', price: 50},
];

// map() a new array of saleProducts.. any price above 30 is half the price
const saleProducts = products.map( product => {
  if(product.price > 30){
    return {name: product.name, price: product.price /2};
  }else{
    return product;
  }
});

console.log('original array   : ', products);
console.log('mapped new array : ', saleProducts);