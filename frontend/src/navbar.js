import React from "react"
import { withRouter } from "react-router-dom"

const NavBar = (props) => {
  const handleLogin = () => {
    props.history.push("/login")
  }

  return (
    <div className="header">
      <h1>CORNUCOPIA</h1>
      <button onClick={() => handleLogin()}>Log In</button>
    </div>
  )
}

export default withRouter(NavBar)
