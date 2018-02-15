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

  const searchedUserSurpluses = props.userSurpluses.filter(
    (surplus) =>
      surplus.category.toLowerCase().includes(props.searchTerm) ||
      surplus.title.toLowerCase().includes(props.searchTerm)
  )

  return (
    <table className="ui striped table">
      <tbody>
        <tr>
          <th>
            <h4>Title</h4>
          </th>
          <th>
            <h4>Category</h4>
          </th>
          <th>
            <h4>Location</h4>
          </th>
          <th>
            <h4>Available On</h4>
          </th>
          <th>
            <h4>Claim By</h4>
          </th>
        </tr>

        {searchedUserSurpluses.map((surplus) => {
          return (
            <tr key={surplus.id}>
              <td>{surplus.title}</td>
              <td>{surplus.category}</td>
              <td>{surplus.location}</td>
              <td>{surplus.available_date}</td>
              <td>{surplus.claim_by_date}</td>
              <td>
                <i
                  id={surplus.id}
                  onClick={(e) => handleClick(e)}
                  className="edit large icon"
                />
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
    userSurpluses: state.currentUser.profile.surpluses,
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps, { changeView, changeSurplusShowId })(
  UserSurplus
)
