import React, { Component } from "react"
import NavBar from "./navbar"
import SideBar from "./sidebar"
import Needs from "./needs"
import SurplusContainer from "./surplusContainer"
import History from "./history"
import DashboardContent from "./dashboardContent"
import { connect } from "react-redux"
import withAuth from "./hocs/withAuth"
import "./style/Dashboard.css"

class Dashboard extends Component {
  render() {
    const viewState = this.props.view.view
    let view = null

    if (viewState === "Needs") {
      view = <Needs />
    } else if (viewState === "Surpluses") {
      view = <SurplusContainer />
    } else if (viewState === "History") {
      view = <History />
    } else {
      view = <DashboardContent />
    }

    return (
      <div className="loggedin-wrapper">
        <NavBar />
        <SideBar />
        {view}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.currentUser.profile,
    view: state.loginView
  }
}

export default withAuth(connect(mapStateToProps, null)(Dashboard))
