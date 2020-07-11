// for loops

for(let i = 0; i < 5; i++){
  console.log('in loop :',i);
}

console.log('loop finished');

//
const names = ['shaun','remi','mario','chun-li'];
for(let i = 0; i < names.length; i++){

    console.log('elements inside names[] ',i,names[i]);
}

for(let i = 0; i<names.length;i++){
  let html=`<div>${names[i]}</div>`;
  console.log(html);
}