import {useState} from 'react';
import Counter from './Counter'

const App = () => {

  const[counter,setCounter]=useState(0);
  const[data,setData]=useState(0);
  const [display,setDisplay]=useState(true);
  return (
    <div>
        <h1>Component LifeCycle in react Component </h1>

        {
          display? <Counter counter={counter} data={data}/> :null
        }

        <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
        <button onClick={()=>setData(data+1)}>Counter {data}</button>

        <button onClick={()=>setDisplay(!display)}>Toggle</button>
    </div>
  )
}

export default App