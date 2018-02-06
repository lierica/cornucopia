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
        Needs
      </h3>
      <h3 id="Surpluses" onClick={(e) => handleClick(e)}>
        Surpluses
      </h3>
      <h3 id="History" onClick={(e) => handleClick(e)}>
        History
      </h3>
    </div>
  )
}

export default connect(null, { changeView })(SideBar)
