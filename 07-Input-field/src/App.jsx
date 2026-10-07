import { useState } from 'react';


const App = () => {
  const [val,setVal]=useState();
  return (
    <div>
      <h1>Get input filed Value</h1>
      <input  type=""text  onChange={(event)=>setVal(event.target.value)} placeholder="Enter User" />
      <h1>{val}</h1>
      <button onClick={()=>setVal(" ")}>Clear Value</button>
    </div>
  )
}

export default App