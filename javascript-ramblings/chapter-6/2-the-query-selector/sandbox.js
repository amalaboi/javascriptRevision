// the query selector

// const para =  document.querySelector('p');
// const para =  document.querySelector('.error');
// const para =  document.querySelector('body > div:nth-child(2) > p:nth-child(2)');
const para =  document.querySelector('div.error');

console.log('para ', para);

const paras = document.querySelectorAll('p');

console.log('paras ', paras);

paras.forEach(para => {
  console.log(para);
});

const errors = document.querySelectorAll('.error');
console.log('errors ', errors);
// log out errors
errors.forEach(error =>{
  console.log(error);
});
