import React from "react"
import { connect } from "react-redux"
import { deleteSurplus } from "./actions/surpluses"
import { toggleLikeFormRender } from "./actions/likeFormRender"
import { changeView } from "./actions/loginView"
import { changePitchedNeedId } from "./actions/pitchedNeedId"
import { createUserSurplusNeed } from "./actions/needs"
import { changeNeedShowId } from "./actions/needShowId"

const SurplusShow = (props) => {
  const currentSurplus = props.surpluses.find(
    (surplus) => surplus.id === props.surplusId
  )

  const currentUserSurplus = props.userSurpluses.find(
    (surplus) => surplus.id === props.surplusId
  )
  const handleClick = (e) => {
    let action = e.target.id
    if (action === "edit") {
      props.changeView("SurplusEdit")
    } else if (action === "delete") {
      props.deleteSurplus(props.surplusId)
      props.changeView("Surpluses")
    } else if (action === "claimed") {
    } else if (action === "pitch") {
      props.toggleLikeFormRender()
    } else if (action === "more") {
      props.changeNeedShowId(e.target.value)
      props.changeView("NeedShow")
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
    props.toggleLikeFormRender()
  }

  return (
    <div className="twelve wide column">
      {props.userCategory === "corporation" ? (
        <div>
          <h1>{currentUserSurplus.title}</h1>
          <button
            id="edit"
            onClick={(e) => handleClick(e)}
            className="ui button"
          >
            Edit
          </button>
          <button
            id="delete"
            onClick={(e) => handleClick(e)}
            className="ui button"
          >
            Delete
          </button>
          <button
            id="claimed"
            onClick={(e) => handleClick(e)}
            className="ui button"
          >
            Claimed
          </button>
          <h3>{currentUserSurplus.description}</h3>
          <h3>{currentUserSurplus.category}</h3>
          <h3>{`${currentUserSurplus.units} ${
            currentUserSurplus.unit_category
          }`}</h3>
          <h3>{currentUserSurplus.location}</h3>
          <h3>{currentUserSurplus.available_date}</h3>
          <h3>{currentUserSurplus.claim_by_date}</h3>
          <h3>Shortlisted By:</h3>
          {currentUserSurplus.pitched_needs.map((need) => (
            <ul key={need.id}>
              <li>{`${need.user.first_name} ${need.user.last_name}`}</li>
              <li>{need.organization.name}</li>
              <button
                id="more"
                className="ui button"
                value={need.id}
                onClick={(e) => handleClick(e)}
              >
                See More
              </button>
            </ul>
          ))}
        </div>
      ) : null}

      {props.userCategory === "charity" ? (
        <div className="twelve wide column">
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
              <input type="submit" className="button" />
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
    userSurpluses: state.currentUser.profile.surpluses,
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
  createUserSurplusNeed,
  changeNeedShowId
})(SurplusShow)
