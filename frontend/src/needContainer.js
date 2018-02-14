import React from "react"
import { connect } from "react-redux"
import { changeView } from "./actions/loginView"
import UserNeed from "./userNeed"
import NeedIndex from "./needIndex"
import SearchBar from "./searchbar"

const NeedContainer = (props) => {
  const handleClick = () => {
    props.changeView("NeedForm")
  }
  return (
    <div className="twelve wide column">
      {props.userCategory === "charity" ? (
        <div>
          <h1 style={{ fontFamily: "Nunito, sans-serif" }}>Your Needs</h1>
          <button className="ui button" onClick={() => handleClick()}>
            Create Need
          </button>
          <SearchBar />
          <UserNeed />
        </div>
      ) : (
        <div>
          <h1 style={{ fontFamily: "Nunito, sans-serif" }}>Explore Needs</h1>
          <div>
            <SearchBar />
            <NeedIndex />
          </div>
        </div>
      )}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    userCategory: state.currentUser.profile.organization.category,
    formRender: state.needFormRender
  }
}

export default connect(mapStateToProps, { changeView })(NeedContainer)
