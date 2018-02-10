import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import "./style/App.css"

const App = (props) => {
  const handleLogin = () => {
    props.history.push("/login")
  }

  const handleSignup = () => {
    props.history.push("/signup")
  }

  return (
    <div className="ui fluid container" id="background">
      <div className="row">
        <button
          className="ui large button"
          id="login-button"
          onClick={() => handleLogin()}
        >
          Log In
        </button>
      </div>
      <div className="row" id="home-content">
        <img src={require("./media/cornucopia.png")} alt="" />
        <h2 id="headline">Finding purpose for corporate surplus.</h2>
        {props.loggedIn ? null : (
          <button
            className="ui large button"
            id="signup-button"
            onClick={() => handleSignup()}
          >
            Sign Up
          </button>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.currentUser.loggedIn
  }
}

export default withRouter(connect(mapStateToProps, null)(App))
