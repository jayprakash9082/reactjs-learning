import React from 'react'
import { useState } from 'react'

const App = () => {
    const [name,setName]=useState("")
     const [password,setPassword]=useState("")
      const [email,setEmail]=useState("")


      const handleClear=()=>{
        setName("")
        setPassword("")
        setEmail("")
      }
    
  return (
    <div>
        <h1>Controlled Component in React JS</h1>
        <form action="" method="" >
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
            <br /> <br />
           <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter Password" />
            <br /> <br />
           <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter email" />
            <br /> <br />
            <button>Submit</button>
            <button onClick={handleClear}>Clear</button>
            <h3>{name}</h3>
             <h3>{password}</h3>
              <h3>{email}</h3>
        </form>
    </div>
  )
}

export default App