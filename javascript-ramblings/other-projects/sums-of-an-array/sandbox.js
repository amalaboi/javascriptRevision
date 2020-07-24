//sums of an array

// const ar = [1,2,3,4,10,11];
const ar = [1000000001,1000000002,1000000003,1000000004,1000000005];

const sum = (ar) => {
  let newar = 0;
  for(let i = 0; i<ar.length; i++){
    newar += ar[i];
  }
  console.log(newar);
}

sum(ar);

// problem 2

// const a = [1,2,3];
// const b = [3,2,1];
// const a = [5,6,7];
// const b = [3,6,10];
const a = [17,28,30];
const b = [99,16,8];
let returnArray = [0,0]; // [0] => alice and [1] => bob

const compare = (a,b) => {
  for(let i = 0; i<a.length; i++){
    if(a[i] > b[i]){
      returnArray[0]++;
    } else if(b[i] > a[i]){
      returnArray[1]++;
    }
  }//end for loop
  console.log(returnArray);
}

compare(a,b);