//grab element reference
const article = document.querySelector('article');
//children selection ... introducing .children property
console.log(article.children);

// using the Array object to convert HTMLCollections into an Array

console.log(Array.from(article.children));

// cycle through with a foreach
Array.from(article.children).forEach(child => {
  child.classList.add('article-element');
});


//Parent Selection... we will grab h2 element inside article
// introducing .parentElement property
const title =  document.querySelector('h2');
console.log('parent element of h2 is : ', title.parentElement);//article
console.log('parent element of h2 parentElement is : ', title.parentElement.parentElement);//body

//Sibling selection...next element after h2...
//introducing nextElementSibling and previousElementSibling
console.log('the immediate sibling of h2 is: ', title.nextElementSibling);//p tag
console.log('the  sibling before h2 is: ', title.previousElementSibling);//null because there is no element/tag before h2

// chain
console.log(title.nextElementSibling.parentElement.children);

