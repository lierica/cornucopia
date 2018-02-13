import React from "react"
import { connect } from "react-redux"
import { toggleNeedFormRender } from "./actions/needFormRender"
import NeedForm from "./needForm"
import UserNeed from "./userNeed"
import NeedIndex from "./needIndex"
import SearchBar from "./searchBar"

const NeedContainer = (props) => {
  const handleClick = () => {
    props.toggleNeedFormRender()
  }
  return (
    <div className="twelve wide column">
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
          <SearchBar />
          <NeedIndex />
        </div>
      ) : null}
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
