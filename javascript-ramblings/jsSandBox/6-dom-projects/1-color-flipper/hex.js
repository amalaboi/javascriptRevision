const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

// grab reference elements
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

//getRandomNumber function

const getRandomNumber = () =>{
  return Math.floor(Math.random()*hex.length);
};



// eventListener

btn.addEventListener('click',()=>{
  let hexColor = '#'; 
  // console.log(randomNumber);
  for(let i = 0;i<6;i++){
    let randomNumber = getRandomNumber();
    hexColor += hex[randomNumber];

  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  console.log(hexColor);
});