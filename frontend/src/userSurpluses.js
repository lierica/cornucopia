import React from "react"
import { connect } from "react-redux"

const UserSurpluses = (props) => {
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
                <button id={surplus.id}>Edit</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => {
  console.log("mapstate", state)
  return {
    userSurpluses: state.currentUser.profile.surpluses
  }
}

export default connect(mapStateToProps, null)(UserSurpluses)
