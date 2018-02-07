import React from "react"
import { connect } from "react-redux"
import NeedForm from "./needForm"
import UserNeeds from "./userNeeds"
import "./style/Dashboard.css"
import { toggleNeedFormRender } from "./actions/needFormRender"

const NeedContainer = (props) => {
  const handleClick = () => {
    props.toggleNeedFormRender()
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

        {props.userCategory === "charity" && props.formRender === false ? (
          <div>
            <p>Filter</p>
            <UserNeeds />
          </div>
        ) : null}

        {props.userCategory === "corporation" && props.formRender === false ? (
          <div>
            <p>search bar</p>
            <p>all surpluses</p>
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
