
import { useState } from 'react'

const App = () => {

  const userData=[{
    name:"jayprakash",
    age:21,
    email:"jayprakash@test.com",
    id:1
  },
  {
     name:"sam",
     age:24,
    email:"sam@test.com",
    id:2
  },
  {
     name:"peter",
     age:26,
    email:"peter@test.com",
    id:3
  },
  {
     name:"bruce",
     age:23,
    email:"bruce@test.com",
    id:4
  }
]
  
  return (
    <div>
      <h1>Lopp in JSX with Map Function </h1>
      <table border='1'>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user)=>( 
            <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
          </tr>
          ))
          }
        </tbody>
      </table>

      <h1>Dummy DAta</h1>
      <table border=" 1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jayprakash</td>
            <td>jayprakash@test.com</td>
            <td>23</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Jayprakash</td>
            <td>jayprakash@test.com</td>
            <td>23</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Jayprakash</td>
            <td>jayprakash@test.com</td>
            <td>23</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Jayprakash</td>
            <td>jayprakash@test.com</td>
            <td>23</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App