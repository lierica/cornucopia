import React from "react"
import { connect } from "react-redux"

const DashboardContent = (props) => {
  return (
    <div className="twelve wide column">
      <h1>{`Welcome, ${props.user.first_name} ${props.user.last_name}`}</h1>
      <h1>
        {props.userCategory === "charity"
          ? "Pending Pitched Needs"
          : "Open Surpluses"}
      </h1>
      <h1>suggested surpluses/needs</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.currentUser.profile,
    userCategory: state.currentUser.profile.organization.category
  }
}

export default connect(mapStateToProps, null)(DashboardContent)
