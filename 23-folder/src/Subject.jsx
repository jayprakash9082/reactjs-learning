import React, { useContext } from 'react'
import { SubjectContext } from './ContextData'

const Subject = () => {
    const subject = useContext(SubjectContext)
  return (
    <div style={{backgroundColor:"red",padding:10}}>
        <h1>Subject is :{subject}</h1>
    </div>
  )
}

export default Subject