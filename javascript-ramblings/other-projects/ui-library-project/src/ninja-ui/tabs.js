import './styles/tabs.css';

class Tabs{

    constructor(container){
      this.container = container;
      this.tabs = container.querySelectorAll('.trigger');
    }// end of constructor

    init(){

      this.tabs.forEach((tab)=>{
        tab.addEventListener('click', (e) => {
          this.toggleTabs(e);
          this.toggleContent(e);
        });
      });

    }// end of init()

    toggleTabs(e){
      //remove current active classes
      this.tabs.forEach((tab)=>{
          tab.classList.remove('active');
      });

      e.target.classList.add('active');
    }// end of toggleTabs()

    toggleContent(e){
      // remove current active classes from content
      this.container.querySelectorAll('.content').forEach((item)=>{
        item.classList.remove('active');
      });
      //  add new active class to content
      const selector = e.target.getAttribute('data-target');
      const content = this.container.querySelector(selector);
      content.classList.add('active');


    }// end of toggleContent()

}// end of class

export { Tabs as default};