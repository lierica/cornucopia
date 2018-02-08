import React from "react"
import { connect } from "react-redux"

const NeedShow = (props) => {
  const currentNeed = props.needs.find((need) => {
    return need.id === props.needId
  })

  console.log("need show props", props)

  return (
    <div>
      {props.userCategory === "charity" ? (
        <div>
          <h1>{currentNeed.title}</h1>
          <button>Edit</button>
          <button>Delete</button>
          <button>Fulfilled</button>
          <h3>{currentNeed.description}</h3>
          <h3>{currentNeed.category}</h3>
          <h3>{`${currentNeed.units} ${currentNeed.unit_category}`}</h3>
          <h3>{currentNeed.location}</h3>
          <h3>{currentNeed.fulfill_by_date}</h3>
        </div>
      ) : null}

      {props.userCategory === "corporation" ? (
        <div>
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

export default connect(mapStateToProps, null)(NeedShow)
