import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { logoutUser } from "./actions/currentUser"
import { resetView } from "./actions/loginView"

const NavBar = (props) => {
  const handleLogin = () => {
    props.history.push("/login")
  }

  const handleLogout = () => {
    props.logoutUser()
    props.resetView()
    props.history.push("/")
  }

  return (
    <div className="ui fluid borderless menu">
      <img className="item" src={require("./img/logo.png")} />
      {props.loggedIn ? (
        <div className="right item">
          <button className="ui button" onClick={() => handleLogout()}>
            Log Out
          </button>
        </div>
      ) : (
        <div className="right item">
          <button className="ui button" onClick={() => handleLogin()}>
            Log In
          </button>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.currentUser.loggedIn
  }
}

export default withRouter(
  connect(mapStateToProps, { logoutUser, resetView })(NavBar)
)
