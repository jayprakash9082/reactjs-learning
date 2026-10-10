import React from 'react'
import { useTransition } from 'react'
import { useState } from 'react'

const App = () => {
  const [pending,startTransition]=useTransition();

  const handleButton = ()=>{
    startTransition(async()=>{
      await new Promise(res=>setTimeout(res,2000))

    });
  }
 

  return (
    <div>
      <h1>useTransition Hook in React js </h1>
      {
        pending?
        <img style={{width:"100px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="" /> :null
      }

      <button disabled={pending} onClick={handleButton}>Submit</button>
    </div>
  )
}

export default App