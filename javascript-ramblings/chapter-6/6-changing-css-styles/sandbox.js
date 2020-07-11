//grab element reference
const title = document.querySelector('h1');

//title.setAttribute('style','margin:50px;');// this will completely override the color style
console.log(title.style);
console.log(title.style.color);

// set new css styles

title.style.margin = '150px'; // adds margin:50px to the style
title.style.color = 'crimson'; // changes the color from orange to crimson
title.style.fontSize = '60px'; // font-size of 60px
title.style.textAlign = 'center'; // center the h1 to the middle of the viewport

//removing the margin
title.style.margin = '';