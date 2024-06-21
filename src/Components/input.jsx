import React from "react";
import { useWeather } from "./Context";
const Input = (props) => {
    const weather = useWeather();

    return(
        <input className="inputField" placeholder="Search here" value={props.searchCity} onChange={(e) => weather.setSearchCity(e.target.value)}/>
    );
};

export default Input;