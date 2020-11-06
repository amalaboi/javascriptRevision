// selector the dom element

const body = document.querySelector('body');
const result = document.querySelector('#result');
const result2 = document.querySelector('#result2');
const first = document.querySelector('.first');
const last = document.querySelector('.last');
const red = document.querySelector('.red');



console.log(result.parentElement.parentElement);
// const second = first.nextSibling.nextSibling.style.color='red';
const second = first.nextElementSibling;
// const second = first.nextElementSibling.style.color='red';
console.log(second);
console.log(second.style.color='red');

// This method previousSibling ensures that we do it twice to avoid white space
// const fourth = last.previousSibling.previousSibling;
// Below method allows us to use previousElementSibling once and it avoids the whitespace...
const fourth = last.previousElementSibling;
console.log(fourth);

//create new element createElement('element')
const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('a simple body Div');
bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv);
document.body.insertBefore(bodyDiv, result);

//check what properties result has
console.log(result.children);
console.log(result2.children);

const heading = document.createElement('h2');
const heading2 = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');
heading2.classList.add('blue');
heading2.innerText = 'dynamic heading 2';
// result2.appendChild(heading);
result.prepend(heading);
result2.append(heading2);

const body2 = document.createElement('div');
body2.classList.add('red');
body2.innerHTML = `
  <h3>Here goes the neigbourhood</h3>
  <p> So, the story here is some slept away while leaving the gas on</p>
`;
body.prepend(body2);
