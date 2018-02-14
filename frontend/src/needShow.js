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
    } else if (action === "claimed") {
    }
  }

  return (
    <div className="twelve wide column">
      {props.userCategory === "charity" ? (
        <div>
          <h1>{currentNeed.title}</h1>
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
            id="fulfilled"
            onClick={(e) => handleClick(e)}
            className="ui button"
          >
            Fulfilled
          </button>
          <h3>{currentNeed.description}</h3>
          <h3>{currentNeed.category}</h3>
          <h3>{`${currentNeed.units} ${currentNeed.unit_category}`}</h3>
          <h3>{currentNeed.location}</h3>
          <h3>{currentNeed.fulfill_by_date}</h3>
        </div>
      ) : null}

      {props.userCategory === "corporation" ? (
        <div className="twelve wide column">
          <h1>{currentNeed.title}</h1>
          <h3>{currentNeed.description}</h3>
          <h3>{currentNeed.category}</h3>
          <h3>{`${currentNeed.units} ${currentNeed.unit_category}`}</h3>
          <h3>{currentNeed.location}</h3>
          <h3>{currentNeed.fulfill_by_date}</h3>
          <br />
          <h1>Contact</h1>
          <h3>{`${currentNeed.user.first_name}${
            currentNeed.user.last_name
          }`}</h3>
          <h3>{currentNeed.user.role}</h3>
          <h3>{currentNeed.user.email}</h3>
          <h3>{currentNeed.user.phone}</h3>
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
