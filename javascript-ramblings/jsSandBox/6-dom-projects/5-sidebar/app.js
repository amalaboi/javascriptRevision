//grab reference elements

const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');


// eventListener...
sidebarToggle.addEventListener('click',()=>{
  //using the toggle class
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click',()=>{
  sidebar.classList.remove('show-sidebar');
});