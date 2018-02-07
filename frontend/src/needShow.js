import React from "react"
import { connect } from "react-redux"

const NeedShow = (props) => {
  console.log("needshow props", props)
  return <div>NEEDSHOW</div>
}

const mapStateToProps = (state) => {
  return {
    userCategory: state.currentUser.profile.organization.category
  }
}

export default connect(mapStateToProps, null)(NeedShow)
