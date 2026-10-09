
import { useState } from "react"

import Counter from "./Counter"
const App = () => {
  const [counter,setCounter]=useState(0);
  const [data,setData]=useState(0);

  return (
    <div>
      <Counter counter={counter} data={data}/>
      <button onClick={()=>setCounter(counter+1)}>Counter{counter}</button>
      <button  onClick={()=>setData(data+1)}>Data{data}</button>

      
    </div>
  )
}

export default App