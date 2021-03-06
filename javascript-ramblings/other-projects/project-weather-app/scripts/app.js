// app.js is for all our DOM manipulation like showing things on the webpage

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

//update UI
const updateUI = (data) => {
  // const cityDetails = data.cityDetails;
  // const weather = data.weather;

  // destructuring properties...this is the same as above..
  const {cityDetails,weather} = data;

  //update details template
  details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
          <span>${weather.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
        </div>
  
  `; 

  //update the night/day & icon images
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);


  // let timeSrc = null;
  // if(weather.IsDayTime){
  //   timeSrc = 'img/day.svg';
  // }else{
  //   timeSrc = 'img/night.svg'; 
  // }
  // using Ternary operator for the above timeSrc
  let timeSrc = weather.IsDayTime? 'img/day.svg': 'img/night.svg' ;
  time.setAttribute('src',timeSrc);

  // remove the d-none class if present
  if(card.classList.contains('d-none')){
      card.classList.remove('d-none');
  }
};


const updateCity = async (city) => {

  // console.log(city);
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  // return {
  //   cityDetails: cityDetails,
  //   weather: weather
  // };

  //using object shorthand for the above return statement...
  return{cityDetails, weather};
  

};

cityForm.addEventListener('submit',e =>{
  e.preventDefault();
  
  //get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the UI with the new city
  updateCity(city).then((data)=>{
    // console.log(data);
    updateUI(data);
  }).catch(err => console.log(err));

  //updating the weather app to store data inside localStorage
  // set local storage for city location
  localStorage.setItem('city', city);

});

//check for truthy value if getItem('city') returns a value...
if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
            .then((data)=>{
              updateUI(data);
            }).catch((err)=>{
              console.log(err);
            });
}


// Ternary Operator
// const result = condition ? 'value 1' : 'value 2';
const result = false? 'value 1' : 'value 2';
console.log(result);