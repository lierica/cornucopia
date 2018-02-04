import React, { Component } from "react"
import NavBar from "./navbar"
import Sidebar from "./sidebar"
import withAuth from "./hocs/withAuth"

class Dashboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <NavBar />
        <Sidebar />
        <h1>YOU ARE LOGGED IN</h1>
      </div>
    )
  }
}

export default withAuth(Dashboard)
