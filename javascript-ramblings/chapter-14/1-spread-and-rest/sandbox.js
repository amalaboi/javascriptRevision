// rest parameter
const double = (...nums) => {
  // console.log(nums);
  console.log('nums : ',nums);
  return nums.map( num => num*2);
};


const result = double(1,3,5,7,9,2,4,6,8);
console.log('result : ',result);
// console.log(result);

// spread syntax (arrays)

const people = ['shaun','mario','ryu'];
console.log('original array : ',people);
console.log('spread syntax  : ',...people);

// using spread syntax inside array
const members = ['crystal','chun-li',...people];
console.log(members);





// spread syntax (objects)


const person = {name:'shaun',
                age: 30,
                job: 'net ninja'
              };
console.log('person object : ', person);

//cloning the person object using spread syntax

const personClone = {...person,location:'london'};
console.log('personClone object : ', personClone);
