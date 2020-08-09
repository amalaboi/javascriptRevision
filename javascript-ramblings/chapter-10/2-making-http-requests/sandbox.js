//making http requests

//first thing to do is to create a REQUEST object...
const request = new XMLHttpRequest();

//add eventListener to check the readyState stages of the request - response
request.addEventListener('readystatechange',()=>{
  if(request.readyState === 4 && request.status === 200){
    console.log(request, request.responseText);
  }else if(request.readyState === 4){
    console.log('could not fetch the data');
  }
});

request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send();
// console.log(request);