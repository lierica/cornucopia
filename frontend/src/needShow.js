import React from "react"
import { connect } from "react-redux"

const NeedShow = (props) => {
  console.log("needshow props", props)

  const currentNeed = props.needs.find((need) => {
    console.log(need.id, props.needId)
    return need.id === props.needId
  })

  return (
    <div>
      <h1>{currentNeed.title}</h1>
      <button>Edit</button>
      <button>Delete</button>
      <h3>{currentNeed.description}</h3>
      <h3>{currentNeed.category}</h3>
      <h3>{`${currentNeed.units} ${currentNeed.unit_category}`}</h3>
      <h3>{currentNeed.location}</h3>
      <h3>{currentNeed.fulfill_by_date}</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("need show state", state)
  return {
    userCategory: state.currentUser.profile.organization.category,
    needs: state.needs,
    needId: parseInt(state.needShowId)
  }
}

export default connect(mapStateToProps, null)(NeedShow)
