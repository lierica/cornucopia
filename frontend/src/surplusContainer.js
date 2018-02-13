import React from "react"
import { connect } from "react-redux"
import { toggleSurplusFormRender } from "./actions/surplusFormRender"
import SurplusForm from "./surplusForm"
import UserSurplus from "./userSurplus"
import SurplusIndex from "./surplusIndex"
import SearchBar from "./searchbar"

const SurplusContainer = (props) => {
  const handleClick = () => {
    props.toggleSurplusFormRender()
  }
  return (
    <div className="twelve wide column">
      <h1>
        {props.userCategory === "corporation"
          ? props.formRender === false ? "Your Surpluses" : null
          : "Explore Surpluses"}
      </h1>
      {props.userCategory === "corporation" && props.formRender === false ? (
        <button className="ui button" onClick={() => handleClick()}>
          Create Surplus
        </button>
      ) : null}
      {props.userCategory === "corporation" && props.formRender === true ? (
        <div>
          <button className="ui button" onClick={() => handleClick()}>
            Cancel
          </button>
          <SurplusForm />
        </div>
      ) : null}

      {props.userCategory === "corporation" && props.formRender === false ? (
        <div>
          <p>Filter</p>
          <UserSurplus />
        </div>
      ) : null}

      {props.userCategory === "charity" && props.formRender === false ? (
        <div>
          <SearchBar />
          <SurplusIndex />
        </div>
      ) : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userCategory: state.currentUser.profile.organization.category,
    formRender: state.surplusFormRender
  }
}

export default connect(mapStateToProps, { toggleSurplusFormRender })(
  SurplusContainer
)
