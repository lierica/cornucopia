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
            <h4>Fulfill By</h4>
          </th>
          <th />
        </tr>

        {searchedNeeds.map((need) => {
          return (
            <tr key={need.id}>
              <td>{need.title}</td>
              <td>{need.category}</td>
              <td>{need.location}</td>
              <td>{need.fulfill_by_date}</td>
              <td>
                <i
                  id={need.id}
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
    needs: state.needs,
    searchTerm: state.searchTerm.toLowerCase()
  }
}

export default connect(mapStateToProps, { changeView, changeNeedShowId })(
  NeedIndex
)
