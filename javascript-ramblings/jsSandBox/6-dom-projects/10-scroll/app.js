// set up the date
const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();

// close links..
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

//eventlisteners
navToggle.addEventListener('click',()=>{
  // we can use this method but it has its limitation especially when we add more links in the html
  // linksContainer.classList.toggle('show-links');


  // we will use Element.getBoundingClientRect()
  //Element.getBoundingClientRect() method returns the size of an element
  //and its position relative to the viewport. so therefore...
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  // console.log(containerHeight);
  // console.log(linksHeight);
  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`;
  }else{
    linksContainer.style.height = 0;
  }
});

//fixed navbar
const navbar = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll',()=>{
  //pageYOffset is a read-only window property that returns the number 
  // of pixels the document has been scrolled vertically.  
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if(scrollHeight > navHeight){
    navbar.classList.add('fixed-nav');
  }else{
    navbar.classList.remove('fixed-nav');
  }

  if(scrollHeight > 500){
    topLink.classList.add('show-link');
  }else{
    topLink.classList.remove('show-link');
  }
});

//
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link)=>{
  link.addEventListener('click',(e)=>{
    //prevent default..
    e.preventDefault();
    //navigate to the specific spot
    //slice extracts a section of a string without modifying original string.
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    // calculate navheight
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    //offsetTop - A Number, representing the top position of the elements, in pixels.
    let position = element.offsetTop - navHeight;
    // console.log(position);
    if(!fixedNav){
      position = position - navHeight;
    }
    if(navHeight > 82){
      position = position + containerHeight;
    }
    window.scrollTo({
      left:0,top:position,
    });
    linksContainer.style.height = 0;
  });
});