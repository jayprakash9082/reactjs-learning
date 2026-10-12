import {Link,NavLink,Outlet} from "react-router"

const College = () => {
  return (
    <div className="college" style={{textAlign:"center"}}>
      <h1>College Page</h1>
      <NavLink className="Link" to="student">
      Student
      </NavLink>
      <NavLink  className="Link"  to="departments">
      Departments
      </NavLink>
      <NavLink  className="Link" to="details">
      Details
      </NavLink>
      <Outlet />
    </div>
  )
}

export default College