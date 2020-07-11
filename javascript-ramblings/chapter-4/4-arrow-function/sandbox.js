// regular function

// const calcArea = function(radius){
//   return 3.14 * radius**2;
// };



// arrow function

// const calcArea = (radius) =>{
//   return 3.14 * radius**2;
// };

// We could simplify the arrow function above further..

const calcArea = radius => 3.14 * radius**2;


//display functions
const area = calcArea(5);
console.log(area);


//exercises
// practise arrow functions by changing regular functions

// const greet = function(){
//   return 'hello, world';
// };

const greet = () => 'hello, world';

const greetings = greet();
console.log(greetings);


//

// const bill = function(products,tax){
//   let total = 0;
//   for(let i=0;i<products.length;i++){
//     total += products[i] + products[i]*tax;
//   }
//   return total;
// }

const bill = (products,tax) => {
  let total = 0;
  for(let i=0;i<products.length;i++){
    total += products[i] + products[i]*tax;
  }
  return total;
}

let products = [1,2,3,4,5];
let total = bill(products,2);
console.log(total);