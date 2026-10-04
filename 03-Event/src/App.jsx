import React from 'react'

const App = () => {

  function callFun(){
    alert("function called")

  }

  const fruit=()=>{
    console.log("Apple")
  }

  return (
    <div>
      <h1>Event and function call</h1>
      <button onClick={callFun}>Click me!</button>
      <button onClick={fruit}>Click on me!</button>
       </div>
  )
}

export default App