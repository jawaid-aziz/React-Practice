import React from "react";
import TodoList from "./Components/TodoList";


function App() {

  return (
    <div className="App" style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
      <h1>React Practice</h1>
      <TodoList/>
    </div>
  );
};

export default App;
