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
          <th />
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
