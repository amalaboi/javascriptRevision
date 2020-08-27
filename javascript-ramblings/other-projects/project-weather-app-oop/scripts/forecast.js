//contains all of the javascript responsible for interacting with the
// weather api and getting data..
// updating the app using Classes and Object Oriented Programming

class Forecast{

      constructor(){
          this.key = 'D7XGTwmgW7jadAVx4SEunOrI8shrppeZ';
          this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
          this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
      }

      async updateCity(city){
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);
        return{cityDetails, weather};
      }

      async getCity(city){

            const base = this.cityURI;
            //query parameters
            const query = `?apikey=${this.key}&q=${city}`;

            //fetch the endpoints 
            const response = await fetch(base + query);
            const data = await response.json();
            return data[0];
      }

      async getWeather(id){
            const base = this.weatherURI;
            const query = `${id}?apikey=${this.key}`;
          
            const response = await fetch(base + query);
            const data = await response.json();
          
            return data[0];
      }



}// end of Forecast class




// // API Key : 	D7XGTwmgW7jadAVx4SEunOrI8shrppeZ
// const key = 'D7XGTwmgW7jadAVx4SEunOrI8shrppeZ';

//getWeather data from API
// const getWeather = async (id) => {

// };


// //getCity data from API

// const getCity = async (city) => {


// };



// getCity('london').then((data)=>{
//     return getWeather(data.Key);
//     }).then((data)=>{
//       console.log(data);
//     }).catch((err)=>{
//       console.log(err);
// });
