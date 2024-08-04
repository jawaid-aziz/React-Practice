import React from "react";
import { Profile } from "./Components/Profile";

function App() {

  return (
    <div className="App" style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
      <h1>React Practice</h1>
      <Profile/>
    </div>
  );
};

export default App;
