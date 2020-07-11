//grab element reference
const content = document.querySelector('p');


//list all the classes inside the content reference element

console.log(content.classList);
content.classList.add('success'); // add new class
console.log(content.classList);

content.classList.remove('success'); // remove class
console.log(content.classList);

//exercise : cycle through the p tags and any tag with success in the text should be given a class = success
//else class = error
const paras = document.querySelectorAll('p');
console.log(paras);// logs out the nodeList..
// console.log(paras[2].innerText);

paras.forEach(para => {
  if(para.innerText.includes('success')){
    console.log('SUCCESS!!!');
    para.classList.add('success');
  }else if(para.innerText.includes('error')){
    console.log('ERROR!!!');
    para.classList.add('error');
  }else{
    console.log('N/A!!!');
  }
});


// This Logic works....
// if(paras[4].innerText.includes('success')){
//   console.log('YES');
//   paras[4].classList.add('success')
// }else{
//   console.log('NO');

// }

// introducing toggle method
const title = document.querySelector('.title');
console.log(title);
title.classList.toggle('test');
title.classList.toggle('title');
console.log(title);
