import React, { Component } from "react"
import { connect } from "react-redux"
import NavBar from "./navbar"
import SideBar from "./sidebar"
import NeedContainer from "./needContainer"
import SurplusContainer from "./surplusContainer"
import DashboardContent from "./dashboardContent"
import SurplusShow from "./surplusShow"
import NeedShow from "./needShow"
import History from "./history"
import NeedForm from "./needForm"
import SurplusForm from "./surplusForm"
import SurplusEditForm from "./surplusEditForm"
import NeedEditForm from "./needEditForm"
import withAuth from "./hocs/withAuth"
import { getNeeds } from "./actions/needs"
import { getSurpluses } from "./actions/surpluses"

class DashboardContainer extends Component {
  componentDidMount() {
    this.props.getNeeds()
    this.props.getSurpluses()
  }

  render() {
    const viewState = this.props.view
    let view = null

    switch (viewState) {
      case "Needs":
        view = <NeedContainer />
        break
      case "Surpluses":
        view = <SurplusContainer />
        break
      case "SurplusShow":
        view = <SurplusShow />
        break
      case "NeedShow":
        view = <NeedShow />
        break
      case "History":
        view = <History />
        break
      case "NeedEdit":
        view = <NeedEditForm />
        break
      case "SurplusEdit":
        view = <SurplusEditForm />
        break
      case "SurplusForm":
        view = <SurplusForm />
        break
      case "NeedForm":
        view = <NeedForm />
        break
      default:
        view = <DashboardContent />
    }

    return (
      <div>
        <div className="ui fluid container">
          <NavBar />
        </div>
        <div className="ui grid">
          <SideBar />
          {view}
        </div>
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
  connect(mapStateToProps, { getNeeds, getSurpluses })(DashboardContainer)
)
