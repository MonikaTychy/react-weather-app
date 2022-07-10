import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ForecastDays from './ForecastDays';

export default function DailyForecast(props) {
    const [forecast, setfForecast] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setfForecast(response.data.daily);
        setLoaded(true);
    }

    useEffect(() => {
        setLoaded(false);
      }, [props.latitude, props.longitude]);

    
    if (loaded) {
        return (
            <div className="DailyForecast">
            <div className='row'>
                {forecast.map((daily,index) => {
                    if (index < 5) {
                    return (
                <div className='col' key={index}>
                    <ForecastDays forecastData={daily} />
                </div>
                    );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
} else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&appid=3ae01ef987c05906e606566faf8b5655&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
    }
}