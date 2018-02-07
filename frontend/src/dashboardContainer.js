import React, { Component } from "react"
import NavBar from "./navbar"
import SideBar from "./sidebar"
import NeedContainer from "./needContainer"
import SurplusContainer from "./surplusContainer"
import History from "./history"
import DashboardContent from "./dashboardContent"
import { connect } from "react-redux"
import withAuth from "./hocs/withAuth"
import { getNeeds } from "./actions/needs"
import { getSurpluses } from "./actions/surpluses"
import { getOrganizations } from "./actions/organizations"
import "./style/Dashboard.css"

class Dashboard extends Component {
  componentDidMount() {
    this.props.getOrganizations()
    this.props.getNeeds()
    this.props.getSurpluses()
  }

  render() {
    const viewState = this.props.view
    let view = null

    if (viewState === "Needs") {
      view = <NeedContainer />
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

export default withAuth(
  connect(mapStateToProps, { getNeeds, getSurpluses, getOrganizations })(
    Dashboard
  )
)
