import React from 'react';
import './Weather.css';

export default function Weather () {
    return (
    <div className='Weather'>
      <h1>Gdynia</h1>
        <h2>
          <span className="temperature">8</span>
          <span className="units">
            <a href="/"> °C </a>|<a href="/"> °F</a>
          </span>
        </h2>
        <div className="row">
          <div className="col-6">
            <div className="time">16:48 </div>
            <div className="date">03 april 2022</div>
          </div>
          <div className="col-6">
            <div className="weather-detail">
              <div className="weather-detail-description">
                <span>☁</span> <span>Cloudy</span>
              </div>
              <div className="weather-detail-pressure">
                Pressure: <span>1004</span>hPa
              </div>
              <div className="weather-detail-wind">
                Wind: <span>8</span>km/h
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}