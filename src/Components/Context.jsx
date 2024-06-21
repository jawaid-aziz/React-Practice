import React, { createContext, useContext, useState } from "react";
import { getWeatherForCity } from "../Api";
import { getWeatherForLocation } from "../Api";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);
    const fetchData = async () => {
        const response = await getWeatherForCity(searchCity);
        setData(response);
    };

    const fetchLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherForLocation(position.coords.latitude, position.coords.longitude).then(data => setData(data));
        });
    };

    return (
        <WeatherContext.Provider value={{searchCity, data, setSearchCity, fetchData, fetchLocation}}>
            {props.children}
        </WeatherContext.Provider>
    )
}