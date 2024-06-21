import React from "react";
import Card from "./Components/Card";
import Button from "./Components/Button";
import Input from "./Components/input";

function App() {

  return (
    <div className="App" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <h1>Weather Forcast</h1>
      <Input/>
      
    </div>
  );
};

export default App;
