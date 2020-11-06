// grab reference elements

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

//eventlistener
btn.addEventListener('click',()=>{
  if(!btn.classList.contains('slide')){
    btn.classList.add('slide');
    video.pause();
  }else{
    btn.classList.remove('slide');
    video.play();
  }
});

//preloader
const preloader = document.querySelector('.preloader');

// eventlistener for preloader
window.addEventListener('load',()=>{
  preloader.classList.add('hide-preloader');
});