import React from 'react'

const userInput = (props) => {
  const styles = {
    width: '60%',
    margin: '10px 0'
  }
  return <input type="text" style={styles} onChange={props.change} value={props.username}/>
}

export default userInput;