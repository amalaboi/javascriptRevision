//first grab the first p tag of interest

const para = document.querySelector('p');

// innerText property is used to check the text inside selected elements

console.log(para.innerText);

//updating the text inside para -- p tag element
para.innerText = 'ninjas are mad awesome!....';
console.log(para.innerText);


// grabbing all the p tags 

const paras = document.querySelectorAll('p');

// paras is a reference nodelist, so therefore we can use forEach

console.log('*==================*');
paras.forEach(para => {
  // para.innerText = '...newText'; // complete override
  para.innerText += '...newText'; // appending to old text
  console.log(para.innerText);
});


// grab class=content

const content = document.querySelector('.content');

//log content.innerHTML

console.log(content.innerHTML);

content.innerHTML += '<h2 style="color: red; font-size:4rem;">THIS IS A NEW H2 CONTENT...</h2>';// appending to old html element
// content.innerHTML = '<h2>THIS IS A NEW H2 CONTENT...</h2>';// complete override of old html element

//imagine we got this people array from a DATABASE
const people = ['mario','luigi','yoshi','remi'];
// now we want to cycle through this people array and we want to generate
// a little html template for each person and output that person in the HTML.

people.forEach(person => {
  // person.innerHTML += '<p>wrect</p>';
  content.innerHTML += `<p style="font-size:3rem;">${person}</p>`;
  console.log(content.innerHTML);
});

//grab the head tag
const headContent = document.querySelector('head');

console.log(headContent);

//css content
const styleContent = `
<style>
html,body,div,p,h2,h1{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
    width:100%;
    height: 100%;
    margin: 0 auto;
    border: 2px solid red;
    text-align: center;
  }
  
  h1, h2{
    color: red;
    background-color: rgba(0,0,0,0.8);
  }

  p{
    background-color: yellow;
  }
  p:hover{
    color: yellow;
    background-color: blue;
    cursor: pointer;
  }

  </style>`;
  
 //merge or append css content inside headContent.innerHTMLd 
  headContent.innerHTML += styleContent;
  console.log(headContent);