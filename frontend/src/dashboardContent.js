import React from "react"
import { connect } from "react-redux"

const DashboardContent = (props) => {
  return (
    <div>
      <h1>{`Welcome, ${props.user.first_name} ${props.user.last_name}`}</h1>
      <h1>some stats and stuff</h1>
      <h1>suggested surpluses/needs</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.currentUser.profile
  }
}

export default connect(mapStateToProps, null)(DashboardContent)
