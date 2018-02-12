import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { logoutUser } from "./actions/currentUser"
import { changeView, resetView } from "./actions/loginView"

const NavBar = (props) => {
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
    <div className="ui fluid borderless menu">
      <img
        className="item"
        alt=""
        src={require("./media/logo.png")}
        onClick={() => handleClick()}
      />
      {props.loggedIn ? (
        <div className="right item">
          <button className="ui button" onClick={() => handleLogout()}>
            Log Out
          </button>
        </div>
      ) : null}
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
