import React from "react"
import { connect } from "react-redux"
import { changeView } from "./actions/loginView"
import { changeSurplusShowId } from "./actions/surplusShowId"

const DashboardContent = (props) => {
  // let likedSurpluses = props.user.liked_surpluses.map(
  //   (surplus) => surplus.title
  // )
  // let pitchedSurpluses

  let reviewSurpluses = props.user.surpluses.filter(
    (surplus) => surplus.pitched_needs.length > 0
  )

  const handleClick = (e) => {
    const surplusShowId = e.target.id
    props.changeView("SurplusShow")
    props.changeSurplusShowId(surplusShowId)
  }

  return (
    <div className="twelve wide column">
      <h1 style={{ fontFamily: "Nunito, sans-serif" }}>{`Welcome, ${
        props.user.first_name
      }`}</h1>
      {props.userCategory === "corporation" ? (
        <div>
          <h2 style={{ fontFamily: "Nunito, sans-serif" }}>
            Surpluses to Review
          </h2>
          <table className="ui striped table">
            <tbody>
              <tr>
                <th>
                  <h4>Surplus</h4>
                </th>
                <th>
                  <h4>Claim By</h4>
                </th>
                <th>
                  <h4>Number of Pitches</h4>
                </th>
                <th />
              </tr>
              {reviewSurpluses.map((surplus) => {
                return (
                  <tr key={surplus.id}>
                    <td>{surplus.title}</td>
                    <td>{surplus.claim_by_date}</td>
                    <td>{surplus.pitched_needs.length}</td>
                    <td>
                      <i
                        id={surplus.id}
                        onClick={(e) => handleClick(e)}
                        className="angle double right large icon"
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h1 style={{ fontFamily: "Nunito, sans-serif" }}>
            Needs You've Pitched
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

export default connect(mapStateToProps, { changeView, changeSurplusShowId })(
  DashboardContent
)
