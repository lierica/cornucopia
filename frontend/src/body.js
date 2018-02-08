import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

const Body = (props) => {
  const handleSignup = () => {
    props.history.push("/signup")
  }

  return (
    <div>
      <h1>body</h1>
      {props.loggedIn ? null : (
        <button onClick={() => handleSignup()}>Get Started</button>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.currentUser.loggedIn
  }
}

export default withRouter(connect(mapStateToProps, null)(Body))
