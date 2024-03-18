import React from 'react'

const Button = (props) => {
  const stat = props.status
  return (
    <>
    <button className={stat === "Login" ? 'color green' : 'red'}> {stat}</button>
    </>
  )
}

export default Button