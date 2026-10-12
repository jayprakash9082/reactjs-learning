import {Routes,Route,Link} from "react-router"
import Home from "./Home"
import Navbar from "./Navbar"
import About from './About'
import Login from "./Login"
import College from "./College"
import Student from "./Student"
import Departments from "./Departments"
import Details from "./Details"


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />}/>
           <Route path="/Login" element={<Login />}/>

           <Route  path="/college" element={<College/>}>
           <Route path='student' element={<Student/>}/>
           <Route path='departments' element={<Departments/>}/>
           <Route path='details' element={<Details/>}/>
           </Route>
      </Routes>

    </div>
  )
}

export default App

