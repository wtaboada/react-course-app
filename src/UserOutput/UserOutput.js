import React from 'react'

import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>This is the first paragraph of {props.username}</p>
      <p>This is the second paragraph</p>
    </div>
  )
}

export default userOutput;