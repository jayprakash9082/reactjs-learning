import React from 'react'
import { useEffect } from 'react'

const Counter = ({counter,data}) => {



    const handleCounter =()=>{
        console.log("Handle Counter Called")

    }

    const handleData=()=>{
      console.log("Handle Data Called")

    }
    
  
      useEffect(()=>{
     handleCounter();

  },[counter])

      useEffect(()=>{
      handleData();
  },[data])
   
  return (
    <div>
        <h1>Counter Component</h1>
        <h1>Counter: {counter}</h1>
        <h1>Data: {data}</h1>
    </div>
  )
}

export default Counter