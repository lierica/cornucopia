import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { logoutUser } from "./actions/currentUser"

const NavBar = (props) => {
  const handleLogin = () => {
    props.history.push("/login")
  }

  const handleLogout = () => {
    props.logoutUser()
    props.history.push("/")
  }

  return (
    <div className="header">
      <h1>CORNUCOPIA</h1>
      {props.loggedIn ? (
        <button onClick={() => handleLogout()}>Log Out</button>
      ) : (
        <button onClick={() => handleLogin()}>Log In</button>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.currentUser.loggedIn
  }
}

export default withRouter(connect(mapStateToProps, { logoutUser })(NavBar))
