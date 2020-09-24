import './styles/tooltip.css';

class Tooltip{

  constructor(element){
    this.element = element;
    this.message = element.getAttribute('data-message');
  }

  //init() function to initialize our component..
  init(){
    const tip = document.createElement('div'); 
    tip.classList.add('tip');
    tip.textContent = this.message;
    this.element.appendChild(tip);

    //add event listener
    this.element.addEventListener('mouseenter',() => {
      tip.classList.add('active');// show tip when we have a mouse hover it.
    });

    this.element.addEventListener('mouseleave',() => {
      tip.classList.remove('active'); // don't show tip once mouse goes away from it.
    });
    
  }// end of init()

}

export { Tooltip as default};