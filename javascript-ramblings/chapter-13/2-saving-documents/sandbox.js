//saving documents to firestore

const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

// method() for adding recipe and date to our frontend html.. 
const addRecipe = (recipe, id) => {

  let time = recipe.created_at.toDate();

  let html = `

  <li data-id="${id}">
    <div>${recipe.title}</div>
    <div>---->${time}</div>
    <button class="btn btn-danger btn-sm my-2">delete</button>
  </li>
  `;

  // console.log(html);
  list.innerHTML += html;

};

const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll('li');
  recipes.forEach(recipe => {
    if(recipe.getAttribute('data-id')===id){
      recipe.remove();
    }
  });
}


//get documents --using get() method
// update to the get documents, we are creating Real time listeners using
// onSnapshot() method

const unsub = db.collection('recipes').onSnapshot((snapshot)=>{
    // console.log(snapshot.docChanges());
    snapshot.docChanges().forEach((change)=>{
      const doc = change.doc;
      if(change.type === 'added'){
        addRecipe(doc.data(),doc.id);
      }else if(change.type === 'removed'){
        deleteRecipe(doc.id);
      }
    })
});



// db.collection('recipes').get().then((snapshot)=>{
//     //console.log(snapshot.docs[0].data());
//     snapshot.docs.forEach((doc)=>{
//       // console.log(doc.data());
//       // console.log(doc.id);
//       addRecipe(doc.data(), doc.id);
//     });
// }).catch((err)=>{
//     console.log(err);
// });


// add documents using add() method

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const now = new Date(); // to store timestamps

    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection('recipes').add(recipe).then(()=>{
      console.log('recipe added');
    }).catch(err => {
        console.log(err);
    });

    form.reset();
});

// deleting documents from the Database...

list.addEventListener('click',(e)=>{
  // console.log(e);
  if(e.target.tagName === 'BUTTON'){
      const id = e.target.parentElement.getAttribute('data-id');
      // const li = e.target.parentElement.textContent;
      // console.log(li);
      db.collection('recipes').doc(id).delete().then(()=>{
        // console.log(`${li} :  is deleted`);
        console.log("recipe deleted");

      }).catch((err)=>{
        console.log(err);
      });
  }
});

//unsub from database changes

button.addEventListener('click',()=>{
  unsub();
  console.log('unsubscribed from collection changes');
});