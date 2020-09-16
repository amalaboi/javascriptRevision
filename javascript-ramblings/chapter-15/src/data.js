//data.js

const users = [
    {name:'mario', premium: true},
    {name:'luigi', premium: false},
    {name:'yoshi', premium: true},
    {name:'toad', premium: true},
    {name:'peach', premium: false}
];

//we can use this method of export or do everyting at the bottom in one single line
//export const getPremUsers = (users) =>{
const getPremUsers = (users) =>{
  return users.filter(user => user.premium);
};


// using default exports... export default defaultValues=(users)
//we can use this method of default export or do everyting at the bottom in one single line

// export default users;

export {getPremUsers, users as default}; // this works just like above...