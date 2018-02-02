import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import NavBar from "./navbar"
import Body from "./body"
import "./style/App.css"

class App extends Component {
  handleSignup = () => {
    this.props.history.push("/signup")
  }
  render() {
    return (
      <div className="wrapper">
        <NavBar />
        <Body handleSignup={this.handleSignup} />
      </div>
    )
  }
}

export default withRouter(App)
