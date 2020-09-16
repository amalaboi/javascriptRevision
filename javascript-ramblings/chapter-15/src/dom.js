//dom.js

console.log('dom file...This is coming from dom.js');

const body = document.querySelector('body');

const styleBody = () =>{
  body.style.background = 'peachpuff';
};

const addTitle = (text) =>{
  const title =  document.createElement('h1');
  title.textContent = text;
  body.appendChild(title);
};

// invoke methods
styleBody();
addTitle('Hello, world... from the dom file..');