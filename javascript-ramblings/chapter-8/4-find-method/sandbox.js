// array methods => find methods
const scores = [10,5,0,40,20,10,90,70];


// we want to find the first high score over 50......
const firstHighScore = scores.find( score => {
  return score > 50;
});

console.log(firstHighScore);