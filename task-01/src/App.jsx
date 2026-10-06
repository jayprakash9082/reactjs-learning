import { useState } from 'react'

const App = () => {
  const [count ,setCount]=useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Counter</button>
      {
        count == 0?<h1>Condition 0</h1>
        :count == 1?<h1>Condition 1</h1>
        :count == 2?<h1>Condition 2</h1>
        :count == 3?<h1>Condition 3</h1>
        :count == 4?<h1>Condition 4</h1>
        :count == 5?<h1>Condition 5</h1>
        :<h1>Other condition</h1>
      }
      </div>
  )
}

export default App