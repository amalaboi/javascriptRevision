// array methods => reduce methods
const scores = [10,20,60,40,70,90,30,76,54];

// how many scores are over 50...
let acc = 0;
const result = scores.reduce( (acc,curr) => {
  if(curr > 50){
    acc++;
  }
  return acc;
} ,acc); 


console.log(result);

// another example, get the total of all mario scores

const gameScores = [
  {player: 'mario', score: 50},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'mario', score: 40},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 90},
  {player: 'mario', score: 20},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 30},
  {player: 'mario', score: 60},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 45},
  {player: 'mario', score: 50},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 75},
  {player: 'mario', score: 20},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60}
];

// add all marioscores and return the total

const marioTotal = gameScores.reduce((accu,curr) => {
    if(curr.player === 'mario'){
      //add up scores
      accu += curr.score;
    }
    return accu;
},0);

console.log(marioTotal);
