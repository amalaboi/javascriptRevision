//dom.js

console.log('dom file...This is coming from dom.js');

const body = document.querySelector('body');

//we can use this method of export or do everyting at the bottom in one single line
//export const styleBody = () =>{
const styleBody = () =>{
  body.style.background = 'peachpuff';
};

//we can use this method of export or do everyting at the bottom in one single line
//export const addTitle = (text) =>{
const addTitle = (text) =>{
  const title =  document.createElement('h1');
  title.textContent = text;
  body.appendChild(title);
};

//we can use this method of export or do everyting at the bottom in one single line
//export const contact = 'mario@thenetninja.co.uk';

const contact = 'mario@thenetninja.co.uk';

// invoke methods
//styleBody();
addTitle('Hello, world... from the dom file..');

// another method of using export
// do everyting in one single line of export...
export{styleBody,addTitle,contact};