import { useContext, useEffect, useState } from 'react';
import Item from './Components/Item';

function App() {

  return (
    <div className="App">
      <Item name="Lenovo Legion 5" price = "1000"/>
      <Item name="IPhone 14" price = "700"/>
      <Item name="Samsung S23" price = "800"/>
      <Item name="Pendrive" price = "200"/>
    </div>
  );
};

export default App;
