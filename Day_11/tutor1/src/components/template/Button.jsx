import React from 'react'

const Button = ({ action, handleClick }) => {
  return (
    <button onClick={handleClick}>{action}</button>
  )
}

export default Button