import React from 'react';
import './Weather.css';

export default function Weather (props) {
    return (
    <div className='Weather'>
      <h1>{props.infos.cityName}</h1>
        <h2>
          {Math.round(props.infos.temperature)}
          <span className="units">
            <a href="/"> °C </a>|<a href="/"> °F</a>
          </span>
        </h2>
        <h3><span className='icon'>{props.infos.icon}</span> {props.infos.description}</h3>
      <div className="row my-3">
          <div className="col-6">
            <ul>
             <li>16:48 </li>
             <li>03 april 2022</li>
            </ul>
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