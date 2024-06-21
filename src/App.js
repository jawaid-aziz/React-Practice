import React, { useEffect } from "react";
import Card from "./Components/Card";
import Button from "./Components/Button";
import Input from "./Components/input";
import { useWeather } from "./Components/Context";

function App() {
  const weather = useWeather();
  useEffect(() => {
    weather.fetchLocation();
  }, []);

  return (
    <div className="App" style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
      <h1>Weather Forcast</h1>
      <Input/>
      <Button onClick={weather.fetchData} value="Search"/>
      <Card/>
      <Button value="Refresh"/>
    </div>
  );
};

export default App;
