import React from "react"
import NavBar from "./navbar"
import { createUser } from "./actions/currentUser"
import { updateUserFormData } from "./actions/userFormData"
import { connect } from "react-redux"
import "./style/loginSignup.css"

const Signup = (props) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    const userFormData = Object.assign({}, props.userFormData, {
      [name]: value
    })
    props.updateUserFormData(userFormData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.createUser(props.userFormData, props.history)
  }

  const {
    first_name,
    last_name,
    email,
    phone,
    organization,
    organization_category,
    role,
    password
  } = props.userFormData

  return (
    <div>
      <div className="ui fluid container">
        <NavBar />
      </div>

      <div className="middle aligned center aligned grid" id="loginSignupForm">
        <div className="column">
          <div className="row">
            <h1
              className="ui image header"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Sign Up
            </h1>
            <img id="cornucopiaIcon" src={require("./media/icon.png")} alt="" />
          </div>
          <form className="ui large form" onSubmit={(e) => handleSubmit(e)}>
            <div className="ui stacked segment">
              <div className="field">
                <input
                  type="text"
                  name="first_name"
                  value={first_name}
                  placeholder="First Name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="last_name"
                  value={last_name}
                  placeholder="Last Name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="E-mail"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  placeholder="Phone"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="organization"
                  value={organization}
                  placeholder="Organization Name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="field">
                <select
                  className="ui dropdown"
                  name="organization_category"
                  value={organization_category}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="charity">Organization Type</option>
                  <option value="charity">Charity</option>
                  <option value="corporation">Corporation</option>
                </select>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="role"
                  value={role}
                  placeholder="Role/Title"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <input className="ui large button" type="submit" />
            </div>
          </form>
          <div className="ui message">
            Have an account? <a href="/login"> Log In</a>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userFormData: state.userFormData
  }
}

export default connect(mapStateToProps, {
  createUser,
  updateUserFormData
})(Signup)
