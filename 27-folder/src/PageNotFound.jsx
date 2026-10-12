import {Link} from "react-router"
const PageNotFound = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Page not found</h1>
        <h2>404</h2>
        
        <img  style={{width:"500px"}} src="https://img.magnific.com/free-vector/glitch-error-404-page_23-2148105404.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        <br />
        <Link to="/"> GO to home page</Link>
        
    </div>
  )
}

export default PageNotFound