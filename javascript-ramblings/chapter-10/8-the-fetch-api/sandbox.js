//The Fetch API
//introducing the fetch(resource/endpoints) api

fetch('todos/luigi.json').then((response)=>{
    console.log('resolved', response);
    return response.json();
}).then((data)=>{
    console.log('data : ',data);
}).catch((err)=>{
    console.log('rejected', err);
});