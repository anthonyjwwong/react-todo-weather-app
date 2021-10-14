import React, { useState } from 'react'
import './Weather.css';

function Weather() {
    
    const [city, setCity] = useState("London");
    const [current, setTemp] = useState({

    })
    const handleClick = () => {

      
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api)
            .then(response => response.json())
            .then(data => console.log(data.weather))
            .catch((error) => {
                console.log(error)
                // Code for handling the error
            });
        }
   

    return (
        <div>
            <input 
                name="city"
                value={city}
                onChange={e=>setCity(e.target.value)}    
            />
            <button onClick={handleClick}>
                click
            </button>
        </div>
    )
}

export default Weather;
