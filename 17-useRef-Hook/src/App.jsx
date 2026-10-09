import { useRef } from "react"

const App = () => {
  const inputRef=useRef(null);

  const inputHandler=()=>{
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color="red";
     inputRef.current.placeholder="enter password"
  }
  return (
    <>
    <h1>useRef</h1>
    <input  ref={inputRef} type="text" placeholder='Enter user name'/>
    <button onClick={inputHandler}>Focus on input field</button>
    </>
  )
}

export default App