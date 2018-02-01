import React, { Component } from "react"
import Signup from "./signup"

class Body extends Component {
  render() {
    return (
      <div className="body">
        <h1>body</h1>
        <button onClick={this.props.handleSignup()}>Get Started</button>
      </div>
    )
  }
}
export default Body
