import React, { Component } from "react"
import NavBar from "./navbar"
import { getOrganizations } from "./actions/organizations"
import { connect } from "react-redux"

class Signup extends Component {
  constructor(props) {
    super()
  }
  componentDidMount() {
    this.props.getOrganizations()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <NavBar />
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <br />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <br />
          <input type="text" placeholder="Organization Name" />
          <input type="text" placeholder="Organization Type" />
          <input type="text" placeholder="Role" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    organizations: state.organizations
  }
}

export default connect(mapStateToProps, { getOrganizations })(Signup)
