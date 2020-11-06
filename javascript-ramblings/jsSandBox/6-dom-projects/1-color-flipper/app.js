const colors = ["green","red","rgba(133,122,200)","#f15025"];

// grab reference elements
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

// getRandomNumber function

const getRandomNumber = () =>{
  return Math.floor(Math.random()*colors.length);
};


// eventListeners section
btn.addEventListener('click',()=>{
  // get random numbers between 0 - 3 colors[3]
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];

});