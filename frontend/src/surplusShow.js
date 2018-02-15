import React from "react"
import { connect } from "react-redux"
import { deleteSurplus } from "./actions/surpluses"
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
    props.changeView("Needs")
  }

  const pluralize =
    props.userCategory === "corporation"
      ? currentUserSurplus.units > 1 ? true : false
      : currentSurplus.units > 1 ? true : false

  const pluralizeObj = {
    unit: "Units",
    piece: "Pieces",
    bag: "Bags",
    box: "Boxes",
    pound: "Pounds",
    item: "Items",
    bottle: "Bottles",
    roll: "Rolls",
    can: "Cans",
    tube: "Tubes"
  }

  return (
    <div className="twelve wide column">
      {props.userCategory === "corporation" ? (
        <div>
          <h1 style={{ fontFamily: "Nunito, sans-serif" }}>
            {currentUserSurplus.title}
          </h1>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            {currentUserSurplus.description}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Category: {currentUserSurplus.category}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Amount: {currentUserSurplus.units}{" "}
            {pluralize
              ? pluralizeObj[currentUserSurplus.unit_category]
              : currentUserSurplus.unit_category}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Location: {currentUserSurplus.location}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Available On: {currentUserSurplus.available_date}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Claim By:{currentUserSurplus.claim_by_date}
          </h3>
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
          <div className="ui divider" />
          <h1 style={{ fontFamily: "Nunito, sans-serif" }}>Pitches</h1>
          {currentUserSurplus.pitched_needs.map((need) => (
            <div key={need.id}>
              <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
                {need.organization.name}
              </h3>
              <ul>
                <li style={{ fontFamily: "Nunito, sans-serif" }}>{`${
                  need.user.first_name
                } ${need.user.last_name}`}</li>
                <li style={{ fontFamily: "Nunito, sans-serif" }}>
                  {need.user.role}
                </li>
                <button
                  id="more"
                  className="ui button"
                  value={need.id}
                  onClick={(e) => handleClick(e)}
                >
                  View Need
                </button>
              </ul>
            </div>
          ))}
        </div>
      ) : null}

      {props.userCategory === "charity" ? (
        <div className="twelve wide column">
          <h1 style={{ fontFamily: "Nunito, sans-serif" }}>
            {currentSurplus.title}
          </h1>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            {currentSurplus.description}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Category: {currentSurplus.category}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Amount: {currentSurplus.units}{" "}
            {pluralize
              ? pluralizeObj[currentSurplus.unit_category]
              : currentSurplus.unit_category}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Location: {currentSurplus.location}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Available On: {currentSurplus.available_date}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Claim By: {currentSurplus.claim_by_date}
          </h3>
          <div className="ui divider" />
          <h1 style={{ fontFamily: "Nunito, sans-serif" }}>Pitch A Need</h1>
          <form className="ui form" onSubmit={(e) => handleSubmit(e)}>
            <div className="field">
              <select className="ui dropdown" onChange={(e) => handleChange(e)}>
                <option value="">Select Need to Pitch:</option>
                {props.userNeeds.map((need) => (
                  <option key={need.id} value={need.id}>
                    {need.title}
                  </option>
                ))}
              </select>
            </div>
            <input className="ui button" type="submit" />
          </form>
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
  changePitchedNeedId,
  createUserSurplusNeed,
  changeNeedShowId
})(SurplusShow)
