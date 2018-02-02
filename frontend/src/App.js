import React, { Component } from "react"
import NavBar from "./navbar"
import Body from "./body"
import "./style/App.css"

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <NavBar />
        <Body />
      </div>
    )
  }
}

export default App
