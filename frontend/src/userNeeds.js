import React from "react"
import { connect } from "react-redux"

const UserNeeds = (props) => {
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
            <h3>Fulfill By</h3>
          </th>
          <th>
            <h3>Edit</h3>
          </th>
        </tr>

        {props.userNeeds.map((need) => {
          return (
            <tr key={need.id}>
              <td>{need.title}</td>
              <td>{need.category}</td>
              <td>{need.location}</td>
              <td>{need.fulfill_by_date}</td>
              <td>
                <button id={need.id}>Edit</button>
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
    userNeeds: state.currentUser.profile.needs
  }
}

export default connect(mapStateToProps, null)(UserNeeds)
