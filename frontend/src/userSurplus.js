import React from "react"
import { connect } from "react-redux"
import { changeView } from "./actions/loginView"
import { changeSurplusShowId } from "./actions/surplusShowId"

const UserSurplus = (props) => {
  const handleClick = (e) => {
    const surplusShowId = e.target.id
    props.changeSurplusShowId(surplusShowId)
    props.changeView("SurplusShow")
  }

  console.log("user surplus", props)

  return (
    <table>
      <tbody>
        <tr>
          <th>
            <h3>Title</h3>
          </th>
          <th>
            <h3>Category</h3>
          </th>
          <th>
            <h3>Location</h3>
          </th>
          <th>
            <h3>Available On</h3>
          </th>
          <th>
            <h3>Claim By</h3>
          </th>
          <th>
            <h3>Edit</h3>
          </th>
        </tr>

        {props.userSurpluses.map((surplus) => {
          return (
            <tr key={surplus.id}>
              <td>{surplus.title}</td>
              <td>{surplus.category}</td>
              <td>{surplus.location}</td>
              <td>{surplus.available_date}</td>
              <td>{surplus.claim_by_date}</td>
              <td>
                <button id={surplus.id} onClick={(e) => handleClick(e)}>
                  Edit
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => {
  return {
    userSurpluses: state.currentUser.profile.surpluses
  }
}

export default connect(mapStateToProps, { changeView, changeSurplusShowId })(
  UserSurplus
)
