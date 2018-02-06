import React from "react"
import { connect } from "react-redux"
import "./style/Dashboard.css"
import SurplusForm from "./surplusForm"
import { toggleSurplusFormRender } from "./actions/surplusFormRender"

const SurplusContainer = (props) => {
  const handleClick = () => {
    props.toggleSurplusFormRender()
  }
  return (
    <div className="loggedin-wrapper">
      <div>
        <h1>Surpluses</h1>
        {props.userCategory === "corporation" && props.formRender === false ? (
          <button onClick={() => handleClick()}>Create Surplus</button>
        ) : null}
        {props.userCategory === "corporation" && props.formRender === true ? (
          <SurplusForm />
        ) : null}

        {props.formRender === false ? (
          <div>
            <p>Search Bar</p>
            <p>Filter</p>
            <p>Surplus list</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    userCategory: state.currentUser.profile.organization.category,
    formRender: state.surplusFormRender
  }
}

export default connect(mapStateToProps, { toggleSurplusFormRender })(
  SurplusContainer
)
