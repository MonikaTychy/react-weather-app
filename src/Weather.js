import React from 'react';
import './Weather.css';

export default function Weather () {
    return (
    <div className='Weather'>
      <h1>Gdynia</h1>
        <h2>
          8
          <span className="units">
            <a href="/"> °C </a>|<a href="/"> °F</a>
          </span>
        </h2>
        <h3 className="description">
                ☁ Cloudy
        </h3>
      <div className="row my-3">
          <div className="col-6">
            <ul>
             <li>16:48 </li>
             <li>03 april 2022</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Pressure: 1004hPa</li>
              <li>Wind: 8km/h</li>
           </ul>
          </div>
      </div>
    </div>
    )
}