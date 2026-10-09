import React, { useEffect } from 'react'

const Counter = ({counter,data}) => {

  useEffect(()=>{
    console.log("Mounting phase only")
  },[])

   useEffect(()=>{
    console.log("update phase only")
  },[counter])
  return (
    <div>
        <h1>Counter Value: {counter}</h1>
        <h1>Data Value: {data}</h1>
    </div>
  )
}

export default Counter