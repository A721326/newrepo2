import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  
 

  return (
    <div className="App">
      <h1>Counter app</h1>

      <div className="container">
        <input
          type="text" value={count} onChange={(e) => setCount(+e.target.value)} />
        
      </div>

      <button onClick={()=>setCount(count+1)}>Increase </button>
      <button onClick={()=>setCount(count-1)}>Increase </button>
      <button onClick={()=>setCount(0)}>reset</button>
      <h2>{count}</h2>
    </div>
  );
}


export default App;
