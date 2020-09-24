import './styles/snackbar.css';

class Snackbar{

  constructor(){
    this.snackbar = document.createElement('div');
  }// end of constructor..

  init(){
    this.snackbar.classList.add('snackbar');
    document.querySelector('body').appendChild(this.snackbar);
  }// end of init()

  show(message){
    this.snackbar.textContent = message;
    this.snackbar.classList.add('active'); 
    setTimeout(()=>{
      this.snackbar.classList.remove('active');
    }, 4000);
  }// end of show()

}// end of class

export { Snackbar as default};