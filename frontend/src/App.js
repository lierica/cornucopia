import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import Header from "./header"
import Sidebar from "./sidebar"
import Body from "./body"
import "./style/App.css"

class App extends Component {
  handleSignup = () => {
    console.log("hi")
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Body handleSignup={this.handleSignup} />
      </div>
    )
  }
}

export default withRouter(App)
