import React from "react";
import WeatherIcon from './WeatherIcon';
import './ForecastDays.css';

export default function ForecastDays(props) {
    function max() {
        let max = Math.round(props.forecastData.temp.max);
        return max;
      }
    
      function min() {
        let min = Math.round(props.forecastData.temp.min);
        return min;
      }
    
      function formattedDay() {
        let now = new Date(props.forecastData.dt * 1000);
        let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
        let day = days[now.getDay()];
        return day;
      }

return (
    <div className="ForecastDays">
    <div className='dayName'>{formattedDay()}</div>
    <WeatherIcon iconCode={props.forecastData.weather[0].icon} size={36} color="#FFFAF0" />
    <div className='degrees'>
        <span className='max'>{max()}°</span><span className='min'>{min()}°</span>
    </div>
    </div>
);
}