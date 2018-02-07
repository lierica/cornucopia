import React from "react"
import { connect } from "react-redux"

const UserSurpluses = (props) => {
  return <div>surpluslist</div>
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    userSurpluses: state.currentUser.profile.surpluses
  }
}
export default connect(mapStateToProps, null)(UserSurpluses)
