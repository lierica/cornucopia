import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

const Body = (props) => {
  const handleSignup = () => {
    props.history.push("/signup")
  }

  return (
    <div class="ui fluid center aligned container">
      <div class="twelve wide column">
        <h1>Essentials from Excess</h1>
        {props.loggedIn ? null : (
          <button className="ui button" onClick={() => handleSignup()}>
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

export default withRouter(connect(mapStateToProps, null)(Body))
