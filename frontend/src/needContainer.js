import React from "react"
import { connect } from "react-redux"
import NeedForm from "./needForm"
import "./style/Dashboard.css"
import { toggleNeedFormRender } from "./actions/needFormRender"

const NeedContainer = (props) => {
  const handleClick = () => {
    props.toggleSurplusFormRender()
  }
  return (
    <div className="loggedin-wrapper">
      <div>
        <h1>
          {props.userCategory === "corporation"
            ? "Explore Needs"
            : "Your Needs"}
        </h1>
        {props.userCategory === "charity" && props.formRender === false ? (
          <button onClick={() => handleClick()}>Create Need</button>
        ) : null}
        {props.userCategory === "charity" && props.formRender === true ? (
          <NeedForm />
        ) : null}

        {props.formRender === false ? (
          <div>
            <p>Search Bar</p>
            <p>Filter</p>
            <p>Need list</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    userCategory: state.currentUser.profile.organization.category,
    formRender: state.needFormRender
  }
}

export default connect(mapStateToProps, { toggleNeedFormRender })(NeedContainer)
