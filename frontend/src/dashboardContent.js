import React from "react"
import { connect } from "react-redux"

const DashboardContent = (props) => {
  return (
    <div className="twelve wide column">
      <h1 style={{ fontFamily: "Nunito, sans-serif" }}>{`Welcome, ${
        props.user.first_name
      }`}</h1>
      {props.userCategory === "corporation" ? (
        <div>
          <h1 style={{ fontFamily: "Nunito, sans-serif" }}>
            Pitched Surpluses
          </h1>
          <h1 style={{ fontFamily: "Nunito, sans-serif" }}>Suggested Needs</h1>
        </div>
      ) : (
        <div>
          <h1 style={{ fontFamily: "Nunito, sans-serif" }}>Pitched Needs</h1>
          <h1 style={{ fontFamily: "Nunito, sans-serif" }}>
            Suggested Surpluses
          </h1>
        </div>
      )}
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
