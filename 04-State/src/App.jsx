
import { useState } from 'react'
import Counter from './Counter.jsx';
import RevCounter from './RevCounter.jsx';

const App = () => {
    const [fruit,setFruit]=useState("Apple");

    const handleFruit =()=>{
        setFruit("Banana")

    }
  return (
    <div>
        <h1>States in react js</h1>
        <h1>{fruit}</h1>
        <button onClick={handleFruit}>Change Fruit name</button>

        <Counter />
        <RevCounter />
    </div>
  )
}

export default App