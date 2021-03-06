import React from 'react';
import './Weather.css';
import FormattedTime from './FormattedTime'
import WeatherIcon from './WeatherIcon';
import DailyForecast from './DailyForecast';
import CityPhoto from './CityPhoto';

export default function Weather (props) {
    return (
      <div className='Weather'>
           <div className='d-inline-flex city-row'>
           <h1>{props.infos.cityName}
           <span className='temperature'>{Math.round(props.infos.temperature)}</span>
           <span className="degrees">°C</span>
           </h1>
           <WeatherIcon iconCode={props.infos.icon} size={34} color="#7d0d85" />
           </div>
      <div className='row'>
          <div className='col-6 weather-details'>
              <h2>{props.infos.description}</h2>
              <p>Pressure: {props.infos.pressure}hPa</p>
              <p>Wind: {Math.round(props.infos.wind)}m/s</p>
          </div>
          <div className='col-6 weather-details'>
        <CityPhoto city={props.infos.cityName} />
          </div>
      </div>
         <FormattedTime timestamp={props.infos.timestamp} />
         <hr />
         <DailyForecast longitude={props.infos.longitude}
        latitude={props.infos.latitude} />
 </div>

    );
}