import React from "react"
import { changeView } from "./actions/loginView"
import { changeActiveSidebarButton } from "./actions/activeSidebarButton"
import { connect } from "react-redux"

const SideBar = (props) => {
  const handleClick = (e) => {
    props.changeView(e.target.id)
    props.changeActiveSidebarButton(e.target.id)
  }

  return (
    <div className="three wide column">
      <div className="ui vertical pointing menu">
        <a
          className={
            props.activeButton === "Dashboard" ? "active item" : "item"
          }
        >
          <h3
            style={{ fontFamily: "Nunito, sans-serif" }}
            id="Dashboard"
            onClick={(e) => handleClick(e)}
          >
            <i className="home icon" />
            Dashboard
          </h3>
        </a>
        <a className={props.activeButton === "Needs" ? "active item" : "item"}>
          {props.userCategory === "corporation" ? (
            <h3
              style={{ fontFamily: "Nunito, sans-serif" }}
              id="Needs"
              onClick={(e) => handleClick(e)}
            >
              <i className="world icon" /> Explore Needs
            </h3>
          ) : (
            <h3
              style={{ fontFamily: "Nunito, sans-serif" }}
              id="Needs"
              onClick={(e) => handleClick(e)}
            >
              <i className="user icon" /> Your Needs
            </h3>
          )}
        </a>
        <a
          className={
            props.activeButton === "Surpluses" ? "active item" : "item"
          }
        >
          {props.userCategory === "corporation" ? (
            <h3
              style={{ fontFamily: "Nunito, sans-serif" }}
              id="Surpluses"
              onClick={(e) => handleClick(e)}
            >
              <i className="user icon" /> Your Surpluses
            </h3>
          ) : (
            <h3
              style={{ fontFamily: "Nunito, sans-serif" }}
              id="Surpluses"
              onClick={(e) => handleClick(e)}
            >
              <i className="world icon" /> Explore Surpluses
            </h3>
          )}
        </a>
        <a
          className={props.activeButton === "History" ? "active item" : "item"}
        >
          <h3
            style={{ fontFamily: "Nunito, sans-serif" }}
            id="History"
            onClick={(e) => handleClick(e)}
          >
            <i className="archive icon" /> History
          </h3>
        </a>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userCategory: state.currentUser.profile.organization.category,
    activeButton: state.activeSidebarButton
  }
}

export default connect(mapStateToProps, {
  changeView,
  changeActiveSidebarButton
})(SideBar)
