// asychronous code in action
// using the single thread diagram... 
// the setTimeout() serves as an asynchronous function...

console.log(1);
console.log(2);
setTimeout(()=>{
  console.log("the callback function fired");
},5000);
console.log(3);
console.log(4);