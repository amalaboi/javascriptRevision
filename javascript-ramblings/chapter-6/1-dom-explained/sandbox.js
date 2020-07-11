//get a reference to the 'ul'

const ul = document.querySelector('.people');

const people =['mario','luigi','ryu','shaun','chun-li','remi'];

let html = ``;

// people.forEach(function(person){
//   html += `<li style="color:purple;">${person}</li>`;
// });

people.forEach(person => {
  html += `<li style="color:purple;">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;
