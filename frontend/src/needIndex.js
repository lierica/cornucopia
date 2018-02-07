import React from "react"
import { connect } from "react-redux"

const NeedIndex = (props) => {
  console.log("needindex props", props)
  const handleClick = () => {
    console.log("omg pls")
  }

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

        {props.needs.map((need) => {
          return (
            <tr key={need.id}>
              <td>{need.title}</td>
              <td>{need.category}</td>
              <td>{need.location}</td>
              <td>{need.fulfill_by_date}</td>
              <td>
                <button id={need.id} onClick={() => handleClick()}>
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
    needs: state.needs
  }
}

export default connect(mapStateToProps, null)(NeedIndex)
