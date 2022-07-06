import React from 'react';
import './Weather.css';
import FormattedTime from './FormattedTime'
import TempConversion from './TempConversion';

export default function Weather (props) {
    return (
    <div className='Weather'>
      <h1>{props.infos.cityName}</h1>
          <TempConversion celsius={Math.round(props.infos.temperature)}/>
        <h3><span className='icon'>{props.infos.icon}</span> {props.infos.description}</h3>
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