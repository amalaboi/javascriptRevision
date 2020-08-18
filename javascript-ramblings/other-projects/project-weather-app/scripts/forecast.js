//contains all of the javascript responsible for interacting with the
// weather api and getting data..

// API Key : 	y1wqDCP607xbhAA1HElmBempYGlYD8IB
const key = 'y1wqDCP607xbhAA1HElmBempYGlYD8IB';

//getWeather data from API
const getWeather = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  // console.log(data);
  return data[0];
};


//getCity data from API

const getCity = async (city) => {

  //base url of the api we want to make a request to...
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  //query parameters
  const query = `?apikey=${key}&q=${city}`;

  //fetch the endpoints 
  const response = await fetch(base + query);
  const data = await response.json();

  // console.log(data[0]);
  return data[0];
};



// getCity('london').then((data)=>{
//     return getWeather(data.Key);
//     }).then((data)=>{
//       console.log(data);
//     }).catch((err)=>{
//       console.log(err);
// });
