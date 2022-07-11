import React from 'react';
import './Weather.css';
import FormattedTime from './FormattedTime'
import WeatherIcon from './WeatherIcon';
import DailyForecast from './DailyForecast';
import CityPhoto from './CityPhoto';

export default function Weather (props) {
    return (
    <div className='Weather'>
      <div className='main'>
        <div className='row'>
          <div className='col-4'>
      <h1>{props.infos.cityName}</h1>
       <div className='d-inline-flex'>
         <h2>{Math.round(props.infos.temperature)}
          <span className="degrees">°C</span>
         </h2>
         <WeatherIcon iconCode={props.infos.icon} size={48} />
       </div>
        <div className='description'>{props.infos.description}</div>
       </div>
       <div className='col-8'>
        <CityPhoto city={props.infos.cityName} />
        </div>
        </div>
        </div>
          <div className="row my-3">
           <div className="col-6">
            <FormattedTime timestamp={props.infos.timestamp} />
           </div>
           <div className="col-6">
            <ul>
              <li>Pressure: {props.infos.pressure}hPa</li>
              <li>Wind: {Math.round(props.infos.wind)}m/s</li>
           </ul>
           </div>
          </div>
         <DailyForecast longitude={props.infos.longitude}
        latitude={props.infos.latitude} />
    </div>
    )
}