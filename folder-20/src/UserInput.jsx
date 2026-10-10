import React from 'react'

const UserInput = (props ) => {
  return (
    <div>
        <input type="text" ref={props.ref} />
    </div>
  )
}

export default UserInput