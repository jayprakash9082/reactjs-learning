import React from 'react'
import {useRef} from 'react'

const App = () => {

  const userRef=useRef();
  const passwordRef=useRef();

  const handleForm=(event)=>{
      event.preventDefault();

      const user = document.querySelector("#user").value;
       const password = document.querySelector("#password").value;
       console.log(user,password);

  }

  const handleFormRef =(event)=>{
    event.preventDefault();
    const user = userRef.current.value;
     const password = passwordRef.current.value;
    console.log("handleFormRef",user,password);
  }
  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form action="" method='post' onSubmit={handleForm}>
        <input type="text"   id="user" placeholder='Enter user name' />
        <br /><br />
        <input type="password"   id="password" placeholder='Enter  user password' />
        <br /><br />
        <button> 
          Submit </button>

      </form>

      <hr />
      <h1>Uncontrolled Component With useRef</h1>
      <form action="" method='post' onSubmit={handleFormRef}>
        <input type="text"  ref={userRef} id="userRef" placeholder='Enter user name' />
        <br /><br />
        <input type="password"  ref={passwordRef}  id="passwordRef" placeholder='Enter  user password' />
        <br /><br />
        <button> 
          Submit With Ref 
          </button>
      </form>

    </div>
  )
}

export default App