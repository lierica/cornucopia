import React from "react"
import { changeView } from "./actions/loginView"
import { connect } from "react-redux"

const SideBar = (props) => {
  const handleClick = (e) => {
    props.changeView(e.target.id)
  }

  return (
    <div className="sidebar">
      <h3 id="Dashboard" onClick={(e) => handleClick(e)}>
        Dashboard
      </h3>
      <h3 id="Needs" onClick={(e) => handleClick(e)}>
        {props.userCategory === "corporation" ? "Explore Needs" : "Your Needs"}
      </h3>
      <h3 id="Surpluses" onClick={(e) => handleClick(e)}>
        {props.userCategory === "corporation"
          ? "Your Surpluses"
          : "Explore Surpluses"}
      </h3>
      <h3 id="History" onClick={(e) => handleClick(e)}>
        History
      </h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userCategory: state.currentUser.profile.organization.category
  }
}

export default connect(mapStateToProps, { changeView })(SideBar)
