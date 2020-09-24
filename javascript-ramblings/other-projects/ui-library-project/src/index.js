// import './test.css';
import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tabs';
import Snackbar from './ninja-ui/snackbar';
// console.log('test!');

//create Tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();

// create Dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown)=>{
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('.snackbar-trigger');

button.addEventListener('click',()=>{
  snackbar.show('you clicked me :)');
});