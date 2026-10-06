import React from 'react'
import {useState} from 'react';

const RevCounter = () => {
    const [count,setCount]=useState(10)

    // const handleRevCounter=()=>{
    //     setCount(count-1)
    // }
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={()=>setCount(count-1)}>Reverse Counter</button>
    </div>
  )
}

export default RevCounter