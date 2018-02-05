import React, { Component } from "react"
import NavBar from "./navbar"
import Sidebar from "./sidebar"
import Body from "./body"
import { connect } from "react-redux"
import withAuth from "./hocs/withAuth"

class Dashboard extends Component {
  constructor(props) {
    super()
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <NavBar />
        <Sidebar />
        <Body />
        <h1>YOU ARE LOGGED IN</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("dashboard state", state)
  return {
    currentUser: state.currentUser
  }
}
export default withAuth(connect(mapStateToProps, null)(Dashboard))
