import { useState } from 'react'
import User from './User.jsx'
import User2 from './User2.jsx'
import Student from './Student.jsx'


const App = () => {
  let userName="Jay prakash";
  let age = 21;
  let email = "praksh@test.com"

  let userObject1={
    name:"Jay",
    age:29,
    email:"jay@test.com"
  }

  let userObject2={
    name:"peter",
    age:20,
    email:"peter@test.com"
  }
  
   let userObject3={
    name:"bruce",
    age:30,
    email:"bruce@test.com"
  }
  
  let collegeName=["IET","DU","IIT","NIT","MIT"]

  const [student,setStudent]=useState()
 
  
  return (
    <div>
      <h1>Props in React Js</h1>
      
      < User  name={userName} age ={age} email={email} />
       { student && <Student name={student} />}
       <button onClick={()=>setStudent("bhaskar")}>Update Student name</button>
      <User2  names={collegeName}/>
       < User user={userObject1} />
       < User user={userObject2} />
       < User user={userObject3} />
    </div>
  )
}

export default App