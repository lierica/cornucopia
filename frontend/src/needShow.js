import React from "react"
import { connect } from "react-redux"
import { deleteNeed } from "./actions/needs"
import { changeView } from "./actions/loginView"

const NeedShow = (props) => {
  const currentNeed = props.needs.find((need) => {
    return need.id === props.needId
  })

  const handleClick = (e) => {
    let action = e.target.id

    if (action === "edit") {
      props.changeView("NeedEdit")
    } else if (action === "delete") {
      props.deleteNeed(props.needId)
      props.changeView("Needs")
    }
  }

  const pluralize = currentNeed.units > 1 ? true : false

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
    <div className="twelve wide column" id="needShow">
      {props.userCategory === "charity" ? (
        <div>
          <h1 style={{ fontFamily: "Nunito, sans-serif" }}>
            {currentNeed.title}
          </h1>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            {currentNeed.description}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Category: {currentNeed.category}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Amount: {currentNeed.units}{" "}
            {pluralize
              ? pluralizeObj[currentNeed.unit_category]
              : currentNeed.unit_category}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Location: {currentNeed.location}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Fulfill By: {currentNeed.fulfill_by_date}
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
        </div>
      ) : null}

      {props.userCategory === "corporation" ? (
        <div className="twelve wide column">
          <h1 style={{ fontFamily: "Nunito, sans-serif" }}>
            {currentNeed.title}
          </h1>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            {currentNeed.description}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Category: {currentNeed.category}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Amount: {currentNeed.units}{" "}
            {pluralize
              ? pluralizeObj[currentNeed.unit_category]
              : currentNeed.unit_category}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Location: {currentNeed.location}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Fulfill By: {currentNeed.fulfill_by_date}
          </h3>
          <div className="ui divider" />
          <h1 style={{ fontFamily: "Nunito, sans-serif" }}>Contact</h1>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Name:{" "}
            {`${currentNeed.user.first_name}${currentNeed.user.last_name}`}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Role: {currentNeed.user.role}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            E-mail: {currentNeed.user.email}
          </h3>
          <h3 style={{ fontFamily: "Nunito, sans-serif" }}>
            Phone: {currentNeed.user.phone}
          </h3>
        </div>
      ) : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userCategory: state.currentUser.profile.organization.category,
    needs: state.needs,
    needId: parseInt(state.needShowId)
  }
}

export default connect(mapStateToProps, { deleteNeed, changeView })(NeedShow)
