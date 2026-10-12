import React, { useState } from 'react'
import College from './College'
import ClassComponent from './classComponent'
import { SubjectContext } from './ContextData'

const App = () => {
  const [subject,setSubject]=useState('English')
  return (
    <div style={{backgroundColor:"yellow",padding:10}}>
      
      <SubjectContext.Provider value={subject}>
        <select onChange={(event)=>setSubject(event.target.value)}>
          <option value="">Select Subject </option>
          <option value="Maths">Maths</option>
          <option value="HIstory">History</option>
          <option value="English">English</option>
        </select>
        <h1>Context API  </h1>
         <College />
      </SubjectContext.Provider>
     
    </div>
  )
}

export default App