import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { logoutUser } from "./actions/currentUser"
import { changeView, resetView } from "./actions/loginView"

const NavBar = (props) => {
  const handleLogin = () => {
    props.history.push("/login")
  }

  const handleLogout = () => {
    props.logoutUser()
    props.resetView()
    props.history.push("/")
  }

  const handleClick = () => {
    props.history.location.pathname === "/dashboard"
      ? props.changeView("")
      : props.history.push("/")
  }

  return (
    <div className="ui fluid borderless sticky menu">
      <img
        className="item"
        alt=""
        src={require("./imgs/logo.png")}
        onClick={() => handleClick()}
      />
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
  connect(mapStateToProps, { logoutUser, resetView, changeView })(NavBar)
)
