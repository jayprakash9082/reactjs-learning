import React from 'react'
import{useState} from 'react';

const Counter = () => {

    const [count,setCount]=useState(0)
    const handleCount =()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h1> Counter: {count}</h1>
        
        <button onClick={handleCount}>Update Counter!</button>
    </div>
  )
}

export default Counter