import React, { useState } from 'react';
import './SearchEngine.css';
import Weather from './Weather';
import axios from 'axios';

export default function SearchEngine (props) {
    const [city, setCity] = useState (props.defaultCity);
    const [weatherData, setWeatherData] = useState ({ready: false});

    function handleResponse (response) {
      setWeatherData({
        ready: true,
        cityName: response.data.name,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        timestamp: response.data.dt,
        pressure: response.data.main.pressure,
        wind: response.data.wind.speed
      });
    }

    function handleSubmit (event) {
        event.preventDefault();
      searchAxios();
      }
      
      function updateCity (event) {
        setCity(event.target.value);
      }
      
      function searchAxios () {
        const apiKey = "3ae01ef987c05906e606566faf8b5655"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  
        axios.get(apiUrl).then(handleResponse);
      }
      
    if (weatherData.ready) {
     return (      
      <div className='SearchEngine'>
        <form onSubmit={handleSubmit}>
         <div className='row'>
          <div className='col-8'>
           <input type='search' placeholder='Enter a city...' className='form-control' autoFocus onChange={updateCity}/>
          </div>
          <div className='col-4'>
           <button type='submit' className='btn btn-dark w-100'>Search</button>
          </div>
         </div>
        </form>
         <Weather infos={weatherData}/>
      </div>
    );
} else {
  searchAxios();
  return `Loading weather for ${city}`
}
}