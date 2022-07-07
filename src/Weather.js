import React from 'react';
import './Weather.css';
import FormattedTime from './FormattedTime'
import TempConversion from './TempConversion';
import WeatherIcon from './WeatherIcon';

export default function Weather (props) {
    return (
    <div className='Weather'>
      <h1>{props.infos.cityName}</h1>
          <TempConversion celsius={Math.round(props.infos.temperature)}/>
          <div className='d-inline-flex'>
            <WeatherIcon iconCode={props.infos.icon} />
            <div className='description'>{props.infos.description}</div>
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
    </div>
    )
}