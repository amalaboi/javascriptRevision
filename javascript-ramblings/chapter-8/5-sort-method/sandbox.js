// array methods => sort methods

//example one: sorting strings
const names = ['mario','shaun','chun-li','yoshi','luigi'];


//example two: sorting numbers
const scores = [10,5,0,40,20,10,90,70];

// compare function
// scores.sort((a,b) => {
//   if(a > b){
//     return -1;
//   } else if (b > a){
//     return 1
//   }else {
//     return 0;
//   }
// });

// a shorter compare function
scores.sort((a,b) => {
  return b -a;
});


console.log('sorted array : from highest to lowest : ',scores);
console.log('reverse sorted array : from lowest to highest : ',scores.reverse());


//example three: sorting objects
const players = [
  {name:'mario', score: 20},
  {name:'luigi', score: 10},
  {name:'chun-li', score: 50},
  {name:'yoshi', score: 30},
  {name:'shaun', score: 70}
  
];

// sorting the objects with compare function as the argument

// players.sort((a,b)=>{
//   if(a.score > b.score){
//     return -1;
//   }else if(b.score > a.score){
//     return 1;
//   }else{
//     return 0;
//   }
// });

// shorter version of the above compare function
// players.sort((a,b) => {
  //   return b.score - a.score;
  // });

// a more shorter version of the above compare function
  players.sort((a,b) => b.score - a.score);

console.log('sorted array objects : from highest to lowest : ',players);
// console.log('reverse sorted array : from lowest to highest : ',players.reverse());