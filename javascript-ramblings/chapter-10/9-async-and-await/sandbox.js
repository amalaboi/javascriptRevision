//async and await
// creating a async function

// const getTodos = async () => {

//     const response = await fetch('todos/luigi.json');
//     const data = response.json();
//     return data;

// };

// getTodos().then((data)=>{
//     console.log('resolved : ', data);
// });

const getTodos = async (resource) => {

    const response = await fetch(resource);

    if(response.status !== 200){
        // we throw our own error....
        throw new Error('cannot fetch the Data!');
    }
    const data = response.json();
    return data;

};

console.log(1);
console.log(2);


getTodos('todos/luigi.json').then((data)=>{
    console.log('resolved 1 : ', data);
    getTodos('todos/mario.json').then((data)=>{
        console.log('resolved 2 : ',data);
        getTodos('todos/shaun.json').then((data)=>{
            console.log('resolved 3 : ',data);
        });
    });
}).catch((err)=>{
    console.log('rejected : ',err.message);
});

console.log(3);
console.log(4);

// fetch('todos/luigi.json').then((response)=>{
//     console.log('resolved', response);
//     return response.json();
// }).then((data)=>{
//     console.log('data : ',data);
// }).catch((err)=>{
//     console.log('rejected', err);
// });