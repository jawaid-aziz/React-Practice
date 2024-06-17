import { useContext, useEffect, useState } from 'react';
import Counter from './Components/Counter';
import { CounterContext } from './Context/Counter';

function App() {

  const counterState = useContext(CounterContext);

  console.log("Context", counterState);

  return (
    <div className="App">
      <h1>Counter is {counterState.count}</h1>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
    </div>
  );
};

export default App;
