import React from "react"
import { connect } from "react-redux"

const SurplusShow = (props) => {
  const currentSurplus = props.surpluses.find(
    (surplus) => surplus.id === props.surplusId
  )
  return (
    <div>
      <h1>{currentSurplus.title}</h1>
      <button>Edit</button>
      <button>Delete</button>
      <h3>{currentSurplus.description}</h3>
      <h3>{currentSurplus.category}</h3>
      <h3>{`${currentSurplus.units}${currentSurplus.units_category}`}</h3>
      <h3>{currentSurplus.location}</h3>
      <h3>{currentSurplus.available_date}</h3>
      <h3>{currentSurplus.claim_by_date}</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userCategory: state.currentUser.profile.organization.category,
    surpluses: state.surpluses,
    surplusId: parseInt(state.surplusShowId)
  }
}

export default connect(mapStateToProps, null)(SurplusShow)
