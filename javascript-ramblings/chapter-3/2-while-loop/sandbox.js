// while loops

let i = 0;
while(i < 5){
  console.log(i);
  i++;
}

// names

const names = ['shaun','remi','mario','chun-li','hakuma'];

//loop section
let j = 0;
  while(j < names.length){
    let html = `<div>${names[j]}</div>`;
    console.log(html);
    j++;
  }

  console.log('end of while loop');
