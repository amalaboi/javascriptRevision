// grab reference elements
const btns =  document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles =  document.querySelectorAll('.content');

// eventListener
about.addEventListener('click',(e)=>{
  // console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if(id){
    // console.log(id);
    // remove .active from other buttons
     btns.forEach((btn)=>{
       btn.classList.remove('active');
       e.target.classList.add('active');
     });
     //hide other articles...
     articles.forEach((article)=>{
       article.classList.remove('active');
     });
     const element = document.getElementById(id);
     element.classList.add('active');
  }// end of if 
});