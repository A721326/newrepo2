import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Button from"./components/Button";
function App() {
  const [count, setCount] = useState(0);
     return (
     <div className="container">

         <div className="main-div">
           <div className='center-div'>
             <h1>counter app</h1>
               
                    
                   <input type="text" value={count} onChange={(e) => setCount(+e.target.value)} placeholder="0" /><br/>
                   <h2>{count}</h2>
                 
                  
                   
               <div className='row'>
               
               <button  onClick={()=>setCount(count+1)}>Increase </button>
               <button onClick={()=>setCount(count-1)}>Decrease </button>
               <button  onClick={()=>setCount(0)}>reset</button><br/><br/><br/>


               <input type="text" value={count} onChange={(e) => setCount(+e.target.value)} placeholder="0" /><br/><br/>
                  <h2>{count}</h2>
                 
                  
                   
               <div className='row1'>
               
               <button  onClick={()=>setCount(count+1)}>Increase </button>
               <button onClick={()=>setCount(count-1)}>Decrease </button>
               <button onClick={()=>setCount(0)}>reset</button><br/><br/><br/>
               
               
               <input type="text" value={count} onChange={(e) => setCount(+e.target.value)} placeholder="0" /><br/><br/>
                  <h2>{count}</h2>
                 
                  
                   
               <div className='row1'>
               
               <button  onClick={()=>setCount(count+1)}>Increase </button>
               <button onClick={()=>setCount(count-1)}>Decrease </button>
               <button onClick={()=>setCount(0)}>reset</button>
               

             </div>
           </div>
    </div>
    
    </div> 
</div>
</div>
 
  );
}


export default App;
