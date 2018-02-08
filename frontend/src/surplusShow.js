import React from "react"
import { connect } from "react-redux"
import { deleteSurplusFromIndex } from "./actions/surpluses"
import { deleteSurplusFromUser } from "./actions/currentUser"
import { changeView } from "./actions/loginView"

const SurplusShow = (props) => {
  const currentSurplus = props.surpluses.find(
    (surplus) => surplus.id === props.surplusId
  )

  const handleClick = (e) => {
    let action = e.target.id
    if (action === "edit") {
    } else if (action === "delete") {
      props.deleteSurplusFromIndex(props.surplusId)
      props.deleteSurplusFromUser(props.surplusId)
      props.changeView("Surpluses")
    } else if (action === "claimed") {
    }
  }

  console.log("surplus show pre render", props)
  return (
    <div>
      {props.userCategory === "corporation" ? (
        <div>
          <h1>{currentSurplus.title}</h1>
          <button id="edit" onClick={(e) => handleClick(e)}>
            Edit
          </button>
          <button id="delete" onClick={(e) => handleClick(e)}>
            Delete
          </button>
          <button id="claimed" onClick={(e) => handleClick(e)}>
            Claimed
          </button>
          <h3>{currentSurplus.description}</h3>
          <h3>{currentSurplus.category}</h3>
          <h3>{`${currentSurplus.units} ${currentSurplus.unit_category}`}</h3>
          <h3>{currentSurplus.location}</h3>
          <h3>{currentSurplus.available_date}</h3>
          <h3>{currentSurplus.claim_by_date}</h3>
          <h3>Liked By:</h3>
        </div>
      ) : null}

      {props.userCategory === "charity" ? (
        <div>
          <h1>{currentSurplus.title}</h1>
          <h3>{currentSurplus.description}</h3>
          <h3>{currentSurplus.category}</h3>
          <h3>{`${currentSurplus.units} ${currentSurplus.unit_category}`}</h3>
          <h3>{currentSurplus.location}</h3>
          <h3>{currentSurplus.available_date}</h3>
          <h3>{currentSurplus.claim_by_date}</h3>
          <button>Like</button>
        </div>
      ) : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("surplus show", state)
  return {
    userCategory: state.currentUser.profile.organization.category,
    surpluses: state.surpluses,
    surplusId: parseInt(state.surplusShowId)
  }
}

export default connect(mapStateToProps, {
  deleteSurplusFromIndex,
  deleteSurplusFromUser,
  changeView
})(SurplusShow)
