import {BrowserRouter,Routes,Route,Navigate} from "react-router"
import Home from './Home'
import Navbar from "./Navbar"
import Login from "./LOgin"
import About from "./About"
import PageNotFound from "./PageNotFound"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={< About/>} />

        {/* <Route path="/*" element={< PageNotFound/>} /> */}

        <Route path="/*" element={<Navigate to="/login"/>} />
      </Routes>
    </div>
  )
}

export default App