import { useEffect, useState } from 'react';
import getPosts from './Api';
import './App.css';

function App() {

  const [data, setData] = useState(null);

  useEffect( () => {
    getPosts().then((posts) => setData(posts));
  }, []);

  return (
    <div className="App">
      {
        data ? data.map(e => <li>{e.body}</li>) : <p>No Data</p>
      }
    </div>
  );
}

export default App;
