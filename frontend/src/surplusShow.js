import React from "react"
import { connect } from "react-redux"
import { deleteSurplus } from "./actions/surpluses"
import { toggleLikeFormRender } from "./actions/likeFormRender"
import { changeView } from "./actions/loginView"
import { changePitchedNeedId } from "./actions/pitchedNeedId"
import { createUserSurplusNeed } from "./actions/needs"

const SurplusShow = (props) => {
  const currentSurplus = props.surpluses.find(
    (surplus) => surplus.id === props.surplusId
  )

  const handleClick = (e) => {
    let action = e.target.id
    if (action === "edit") {
    } else if (action === "delete") {
      props.deleteSurplus(props.surplusId)
      props.changeView("Surpluses")
    } else if (action === "claimed") {
    } else if (action === "pitch") {
      props.toggleLikeFormRender()
    }
  }

  const handleChange = (e) => {
    let pitchedNeedId = e.target.value
    props.changePitchedNeedId(pitchedNeedId)
  }

  const handleSubmit = (e) => {
    let pitchedNeedId = props.pitchedNeedId
    let userId = props.user.id
    let likedSurplusId = props.surplusId
    e.preventDefault()
    props.createUserSurplusNeed(pitchedNeedId, userId, likedSurplusId)
  }

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
          <button id="pitch" onClick={(e) => handleClick(e)}>
            {props.likeFormRender === false ? "Pitch" : "Cancel"}
          </button>
          {props.likeFormRender === true ? (
            <form onSubmit={(e) => handleSubmit(e)}>
              <h3>Select Need to Pitch:</h3>
              <select onChange={(e) => handleChange(e)}>
                <option value="">Select</option>
                {props.userNeeds.map((need) => (
                  <option key={need.id} value={need.id}>
                    {need.title}
                  </option>
                ))}
              </select>
              <input type="submit" />
            </form>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.currentUser.profile,
    userCategory: state.currentUser.profile.organization.category,
    userNeeds: state.currentUser.profile.needs,
    surpluses: state.surpluses,
    surplusId: parseInt(state.surplusShowId),
    likeFormRender: state.likeFormRender,
    pitchedNeedId: parseInt(state.pitchedNeedId)
  }
}

export default connect(mapStateToProps, {
  deleteSurplus,
  changeView,
  toggleLikeFormRender,
  changePitchedNeedId,
  createUserSurplusNeed
})(SurplusShow)
