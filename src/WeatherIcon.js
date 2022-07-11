import React from 'react';
import { ReactSkycon } from "react-skycons-extended";

export default function WeatherIcon(props) {
    const codeConnection = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "CLOUDY",
        "03n": "CLOUDY",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "SHOWERS_DAY",
        "09n": "SHOWERS_NIGHT",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "THUNDER",
        "11n": "THUNDER",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG"
      };

    return (
<div className='WeatherIcon me-3'>
<ReactSkycon
        icon={codeConnection[props.iconCode]}
        color={"purple"}
        size={props.size}
        animate={true}
      />
</div>
    );
}