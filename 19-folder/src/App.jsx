import React from 'react'
import User from './User'


const App = () => {

   const displayName=(name)=>{
        alert(name);
    }

    const getUser =()=>{
      alert("get user function called ")

    }
  return (
    <>
    <h1>Call parent function from child component </h1>

    <User displayName={displayName} name="Anil" getUser={getUser} />
    <User displayName={displayName} name=" jp "  getUser={getUser} />
    <User displayName={displayName} name="alok" getUser={getUser} />
    <User displayName={displayName} name="Aman" getUser={getUser} />
    </>
  )
}

export default App