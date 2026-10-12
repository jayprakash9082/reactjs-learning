import {Routes,Route,Link} from "react-router"
import Home from "./Home"
import Login from "./Login"
import About from "./About"
import Navbar from "./Navbar"


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />}/>
           <Route path="/Login" element={<Login />}/>
      </Routes>

    </div>
  )
}

export default App

