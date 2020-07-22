// todolist app

//grab reference element for add form

const addForm = document.querySelector('.add');

//grab reference to ul...todos
const list = document.querySelector('.todos');

//grab reference to search input
const search = document.querySelector('.search input');


// generate template function
const generateTemplate = todo => {

  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
  </li> `;

  list.innerHTML += html;

};

//add eventListener to the addForm 
// This will allow user to add their todo list
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim().toLowerCase(); //trim() deletes all white spaces
    if(todo.length){
      //if todo.length = 0, it is false, because 0 is a falsify variable.
      // otherwise if todo.length > 0 then it is a truthy variable so 
      // generateTemplate() method will run
      console.log(todo);
      generateTemplate(todo);
      addForm.reset(); // it resets the form after submitting.
    }

});

// add eventlistener for the ul.. const->list.... 
// using event delegation, we will gain access to the delete icon.. 
// event delegation means we don't use many event listener on the 
//delete icon as it will affect javascript performance. 
// this way user can delete their todo list
// we used the contains() to check if the classList contains a class called delete
// if true, it runs the remove(), by removing the parentElement of the icon... 
// which is the <li>. The <i> is inside the <li> tag...
// summary.. we grab the ul(list) and add eventlistener with click event..
//then we check to see if the e.target is an icon...and if true, we target
// the parentElement of the <i>, which is a <li> and remove it from the ul(list)
list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
      e.target.parentElement.remove();
  }
});

// filterTodos() callback function for the search event listener

const filterTodos = (term) => {
  //console.log(Array.from(list.children));
  // console.log(list.children);
   Array.from(list.children)
   .filter((todo) => {
    // we want items to be kept in the array if they don't include the term.
    // that's why we used the negate !.. this way we can cycle through the array
    //and apply a class that will allow the items display none.  
    return !todo.textContent.includes(term);
   })
   .forEach((todo) => {
      todo.classList.add('filtered');
   });

   // 
   Array.from(list.children)
   .filter((todo) => {
    // we want items to be kept in the array if they include the term.
    return todo.textContent.includes(term);
   })
   .forEach((todo) => {
      todo.classList.remove('filtered');
   });


};

//keyup event...
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});