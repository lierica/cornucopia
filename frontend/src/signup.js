import React, { Component } from "react"
import NavBar from "./navbar"
import { getOrganizations } from "./actions/organizations"
import { createUser } from "./actions/currentUser"
import { updateUserFormData } from "./actions/userFormData"
import { connect } from "react-redux"

class Signup extends Component {
  componentDidMount() {
    this.props.getOrganizations()
  }

  handleChange = (e) => {
    const { name, value } = e.target
    const userFormData = Object.assign({}, this.props.userFormData, {
      [name]: value
    })
    this.props.updateUserFormData(userFormData)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createUser(this.props.userFormData, this.props.history)
  }

  render() {
    const {
      first_name,
      last_name,
      email,
      phone,
      organization,
      organization_category,
      role,
      password
    } = this.props.userFormData
    return (
      <div>
        <NavBar />
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={this.handleChange}
          />
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={this.handleChange}
          />
          <br />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <label>Confirm Password</label>
          <input type="password" name="confirm_password" />
          <br />
          <label>Organization</label>
          <input
            type="text"
            name="organization"
            value={organization}
            onChange={this.handleChange}
          />
          <label>Organization Category</label>
          <select
            name="organization_category"
            value={organization_category}
            onChange={this.handleChange}
          >
            <option value="">Select</option>
            <option value="charity">Charity</option>
            <option value="corporation">Corporation</option>
          </select>
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={role}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    organizations: state.organizations,
    userFormData: state.userFormData
  }
}

export default connect(mapStateToProps, {
  getOrganizations,
  createUser,
  updateUserFormData
})(Signup)
