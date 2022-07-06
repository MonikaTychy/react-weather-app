import React, { useState } from 'react';
import './TempConversion.css'

export default function TempConversion(props) {
    const [units, setUnits] = useState("metric");

    function convertToCelsius(event) {
        event.preventDefault();
        setUnits("metric");
    }

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnits("imperial");
    }

    function fahrenheit() {
        return Math.round((props.celsius * 1.8) + 32)
    }

    if (units === "metric"){
    return (
        <h2 className="TempConversion">
            {props.celsius}
          <span className="degrees">
             °C | <a href="/" onClick={convertToFahrenheit}>°F</a>
          </span>
        </h2>
    );
    } else {
        return (
            <h2 className="TempConversion">
            {fahrenheit()}
          <span className="degrees">
          <a href="/" onClick={convertToCelsius}>°C</a> | °F
          </span>
        </h2>
        );
    }
}