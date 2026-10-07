import React from 'react'
import { useState } from 'react'

const App = () => {
  const [gender,setGender]=useState("female");
  const [city,setCity]=useState("")
  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>
      <h4>Select Gender</h4>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value={"male"}  checked={gender=="male"} id="male" /> 
      <label htmlFor="male">Male</label>
      <input type="radio"  onChange={(event)=>setGender(event.target.value)} name="gender" value={"female"} checked={gender=="female"} id="female" />
      <label htmlFor="female">Female</label>
      <h2>Selected Gender :{gender}</h2>

      <br />
      <br />
      <h4>Select city</h4>
      <select  onChange={(event)=>setCity(event.target.value)}     defaultValue={"mumbai"} >
        <option value="noida">Noida</option>
        <option value="pune">Pune </option>
        <option value="mumbai">Mumbai </option>
      </select>
      <br />
      <br />
      <h2>Selected city: {city}</h2>
    </div>
  )
}

export default App