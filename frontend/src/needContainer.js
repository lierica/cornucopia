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
        <h1>Needs</h1>

        <p>Search Bar</p>

        <p>Filter</p>
        {props.userCategory === "charity" && props.formRender === false ? (
          <button onClick={() => handleClick()}>Create Need</button>
        ) : null}
        {props.userCategory === "charity" && props.formRender === true ? (
          <NeedForm />
        ) : null}

        <p>Need list</p>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    userCategory: state.currentUser.profile.organization.category,
    formRender: state.surplusFormRender
  }
}

export default connect(mapStateToProps, { toggleNeedFormRender })(NeedContainer)
