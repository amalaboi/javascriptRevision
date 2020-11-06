//grab reference elements
// grab .question,.question-btn,.minus-icon and .plus-icon

// const btns = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');



//another option..we will use selectors inside the element...
// console.log(questions);
questions.forEach((question)=>{
   // console.log(question);
  const btn = question.querySelector('.question-btn');
  console.log(btn);
  //add Event listener
  btn.addEventListener('click',()=>{
    //This will close the questions that are opened while leaving the
    // event.target question opened.. in other words, when I click open
    // a question and it shows the question-text, the other question-text that 
    // are opened will be closed...
    // to do this, we have to select all the questions again..
    questions.forEach((item)=>{
      //if item(article) does not match where I'm click the button(btn), close the question-text
      // console.log(item);
      if(item !== question){
        item.classList.remove('show-text');
      }
    });


    //this will open and close the question text by clicking the button 
     question.classList.toggle('show-text');
  });

});




//first option
// add EventListener
// btns.forEach((btn)=>{
//   btn.addEventListener('click',(e)=>{
//     // console.log(e.currentTarget.parentElement.parentElement);
//     const question = e.currentTarget.parentElement.parentElement;
//     questions.forEach((item)=>{
//       if(item !== question){
//         item.classList.remove('show-text');
//       }
//     });
//     question.classList.toggle('show-text');
//   });
// });