import React from "react"
import { connect } from "react-redux"
import { changeView } from "./actions/loginView"
import { changeSurplusShowId } from "./actions/surplusShowId"

const SurplusIndex = (props) => {
  const handleClick = (e) => {
    const surplusShowId = e.target.id
    props.changeView("SurplusShow")
    props.changeSurplusShowId(surplusShowId)
  }

  const searchedSurpluses = props.surpluses.filter(
    (surplus) =>
      surplus.category.toLowerCase().includes(props.searchTerm) ||
      surplus.title.toLowerCase().includes(props.searchTerm)
  )

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
            <h3>More</h3>
          </th>
        </tr>

        {searchedSurpluses.map((surplus) => {
          return (
            <tr key={surplus.id}>
              <td>{surplus.title}</td>
              <td>{surplus.category}</td>
              <td>{surplus.location}</td>
              <td>{surplus.available_date}</td>
              <td>{surplus.claim_by_date}</td>
              <td>
                <button id={surplus.id} onClick={(e) => handleClick(e)}>
                  More
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
    surpluses: state.surpluses,
    searchTerm: state.searchTerm.toLowerCase()
  }
}

export default connect(mapStateToProps, { changeView, changeSurplusShowId })(
  SurplusIndex
)
