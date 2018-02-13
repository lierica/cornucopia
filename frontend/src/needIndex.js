import React from "react"
import { connect } from "react-redux"
import { changeView } from "./actions/loginView"
import { changeNeedShowId } from "./actions/needShowId"

const NeedIndex = (props) => {
  const handleClick = (e) => {
    const needShowId = e.target.id
    props.changeNeedShowId(needShowId)
    props.changeView("NeedShow")
  }

  const searchedNeeds = props.needs.filter(
    (need) =>
      need.category.toLowerCase().includes(props.searchTerm) ||
      need.title.toLowerCase().includes(props.searchTerm)
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
            <h3>Fulfill By</h3>
          </th>
          <th>
            <h3>More</h3>
          </th>
        </tr>

        {searchedNeeds.map((need) => {
          return (
            <tr key={need.id}>
              <td>{need.title}</td>
              <td>{need.category}</td>
              <td>{need.location}</td>
              <td>{need.fulfill_by_date}</td>
              <td>
                <button id={need.id} onClick={(e) => handleClick(e)}>
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
    needs: state.needs,
    searchTerm: state.searchTerm.toLowerCase()
  }
}

export default connect(mapStateToProps, { changeView, changeNeedShowId })(
  NeedIndex
)
