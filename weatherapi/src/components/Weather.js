import React, { useState } from "react";
import { fetchWeather } from "../openWeatherMap";

const Weather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    const handleFetchWeather = async () => {
        const data = await fetchWeather(city);
        setWeatherData(data);
    };

    return (
        <div>
            <h1>Weather App</h1>
            <div>

                <input type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />

                <button onClick={handleFetchWeather}>Get Weather</button>

            </div> {weatherData && (
                <div>
                    <h2>{weatherData.name}</h2>
                    <p>Temperature: {weatherData.main.temp}°F</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Wind Speed: {weatherData.wind.speed}</p>
                    <p>Wind Deg: {weatherData.wind.deg}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;