import React from 'react'
import {useFormStatus} from 'react-dom';

const App = () => {

  const handleSubmit=async()=>{
    await new Promise(res=>setTimeout(res,2000));
    console.log("Submit");

  }

  function CustomerForm(){
    const {pending} =useFormStatus();
    return(
      <div>
        <input type="text" placeholder='Enter  name' />
        <br /><br />
        <input type="text"  placeholder='Enter password'/>
         <br /><br />
      <button disabled={pending}>
        {pending?'Submitting... ':'Submit'} 
        </button>
      </div>
    )
  }
  return (
    <div>
      <h1>useFormStatus Hook in react js </h1>
      <form action={handleSubmit}>
         <CustomerForm />
      </form>
    
    </div>
  )
}

export default App