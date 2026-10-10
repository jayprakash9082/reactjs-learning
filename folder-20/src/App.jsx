import React from 'react'
import { useRef } from 'react'
import UserInput from './UserInput'
const App = () => {
  const inputRef = useRef(null)
  const updateInput =()=>{
   inputRef.current.value=1000;
   inputRef.current.focus();

  }
  return (
    <div>
      <h1>Forward Ref</h1>
      <UserInput ref={inputRef} />
      <button onClick={updateInput}>Uodate input field</button>


    </div>
  )
}

export default App