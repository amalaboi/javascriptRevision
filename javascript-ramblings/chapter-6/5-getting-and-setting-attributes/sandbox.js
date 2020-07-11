//grab element reference

const link = document.querySelector('a');

// we will introduce the getAttribute() method
console.log(link.getAttribute('href'));
//we will set the attribute by using setAttribute() method
link.setAttribute('href','https://www.thenetninja.co.uk');
console.log(link.getAttribute('href'));
link.innerText = 'The Net Ninja Website';

//grab element reference
const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
//set attribute
mssg.setAttribute('class','success');
console.log(mssg.getAttribute('class'));
// set attribute and create new attribute
mssg.setAttribute('style','color:green; font-size:3rem; text-align:center;');

