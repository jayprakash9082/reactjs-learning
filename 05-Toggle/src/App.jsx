import {useState} from 'react';
import User from './User.jsx';

const App = () => {
  const [display,setDisplay]=useState(true)


  return (
    <div>
      <h1>Toggle in React Js </h1> 
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {/* {
        display? <h1>Jay prakash </h1> :null
      } */}
      
      {
        display?<User /> :null
      }
      
     
      </div>
    

  )
}

export default App