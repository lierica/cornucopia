import React from "react"
import { connect } from "react-redux"

const SurplusShow = (props) => {
  console.log("surplusshow props", props)
  return <div>SURPLUSSHOW</div>
}

const mapStateToProps = (state) => {
  return {
    userCategory: state.currentUser.profile.organization.category
  }
}

export default connect(mapStateToProps, null)(SurplusShow)
