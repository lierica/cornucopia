import React from "react"
import { connect } from "react-redux"
import NeedForm from "./needForm"
import UserNeed from "./userNeed"
import NeedIndex from "./needIndex"
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
            : props.formRender === false ? "Your Needs" : null}
        </h1>
        {props.userCategory === "charity" && props.formRender === false ? (
          <button onClick={() => handleClick()}>Create Need</button>
        ) : null}

        {props.userCategory === "charity" && props.formRender === true ? (
          <div>
            <button onClick={() => handleClick()}>Cancel</button>
            <NeedForm />
          </div>
        ) : null}

        {props.userCategory === "charity" && props.formRender === false ? (
          <div>
            <p>Filter</p>
            <UserNeed />
          </div>
        ) : null}

        {props.userCategory === "corporation" && props.formRender === false ? (
          <div>
            <p>search bar</p>
            <NeedIndex />
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
