import React from "react";
import { Profile } from "./Components/Profile";
import { Counter } from "./Components/Counter";

function App() {

  return (
    <div className="App" style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
      <h1>React Practice</h1>
      <Profile/>
      <Counter/>
    </div>
  );
};

export default App;
