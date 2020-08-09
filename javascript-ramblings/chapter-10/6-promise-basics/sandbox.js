//introducing promises...
//using what we learnt
//creating promises for resolve and reject

const getTodos = (resource)=>{

    return new Promise((resolve,reject)=>{

      const request = new XMLHttpRequest();
// add eventListener to check the readyState stages of the request - response
      request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){
          // console.log(request, request.responseText);
          // callback(undefined, request.responseText);
          const data = JSON.parse(request.responseText);
          resolve(data);
        }else if(request.readyState === 4){
          // console.log('could not fetch the data');
          reject('error getting resource');
        }
      });

      // request.open('GET','https://jsonplaceholder.typicode.com/todos');
      // request.open to access our own todos.json file
      // request.open('GET','todos.json');
      request.open('GET', resource);
      request.send();
    });

};

console.log(1);
console.log(2);


getTodos('todos/luigi.json').then((data)=>{
  console.log('promise resolved : ',data);
}).catch((err)=>{
  console.log('promise rejected : ',err);
});

console.log(3);
console.log(4);

// const getTodos = (resource,callback) => {

//   //copy all the request code inside here...
//   //first thing to do is to create a REQUEST object...
//     const request = new XMLHttpRequest();

//     //add eventListener to check the readyState stages of the request - response
//     request.addEventListener('readystatechange',()=>{
//       if(request.readyState === 4 && request.status === 200){
//         // console.log(request, request.responseText);
//         // callback(undefined, request.responseText);
//         const data = JSON.parse(request.responseText);
//         callback(undefined, data);
//       }else if(request.readyState === 4){
//         // console.log('could not fetch the data');
//         callback('could not fetch Data',undefined);
//       }
//     });

//     // request.open('GET','https://jsonplaceholder.typicode.com/todos');
//     // request.open to access our own todos.json file
//     // request.open('GET','todos.json');
//     request.open('GET', resource);
//     request.send();
// };



// //promise example....
// const getSomething = () => {

//     return new Promise((resolve,reject)=>{
//       //fetch some data
//       resolve('some data');
//       // reject('some error');
//     });

// };

//invoke getSomething()
// getSomething().then((data)=>{
//   console.log(data);
// }, (err)=>{
//   console.log(err);
// });
// a better way to write this instead of using two functions as an argument
// getSomething().then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// });
//better solution













//Now we will learn how to use 'promises' instead of the callback hell below.
//Remember - An Asynchronous code is something that can start NOW and finish LATER!
// console.log(1);
// console.log(2);

// getTodos('todos/luigi.json',(err,data)=>{
//     console.log(data);
//     getTodos('todos/mario.json',(err,data)=>{
//       console.log(data);
//       getTodos('todos/shaun.json',(err,data)=>{
//         console.log(data);
//       });
//     });
// });

// console.log(3);
// console.log(4);






//REQUEST CODE..
// //first thing to do is to create a REQUEST object...
// const request = new XMLHttpRequest();

// //add eventListener to check the readyState stages of the request - response
// request.addEventListener('readystatechange',()=>{
//   if(request.readyState === 4 && request.status === 200){
//     console.log(request, request.responseText);
//   }else if(request.readyState === 4){
//     console.log('could not fetch the data');
//   }
// });

// request.open('GET','https://jsonplaceholder.typicode.com/todos');
// request.send();
