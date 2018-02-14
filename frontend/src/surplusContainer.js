import React from "react"
import { connect } from "react-redux"
import { changeView } from "./actions/loginView"
import UserSurplus from "./userSurplus"
import SurplusIndex from "./surplusIndex"
import SearchBar from "./searchbar"

const SurplusContainer = (props) => {
  const handleClick = () => {
    props.changeView("SurplusForm")
  }
  return (
    <div className="twelve wide column">
      {props.userCategory === "corporation" ? (
        <div>
          <h1>Your Surpluses</h1>
          <button className="ui button" onClick={() => handleClick()}>
            Create Surplus
          </button>
          <SearchBar />
          <UserSurplus />
        </div>
      ) : (
        <div>
          <h1>Explore Surpluses</h1>
          <div>
            <SearchBar />
            <SurplusIndex />
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userCategory: state.currentUser.profile.organization.category,
    formRender: state.surplusFormRender
  }
}

export default connect(mapStateToProps, {
  changeView
})(SurplusContainer)
