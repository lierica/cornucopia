import React, { Component } from "react"
import NavBar from "./navbar"
import { authenticateUser } from "./actions/user"
import { connect } from "react-redux"

class Login extends Component {
  constructor(props) {
    super()
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const loginFormData = {
      user: { email: e.target.email.value, password: e.target.password.value }
    }
    console.log(loginFormData)
    // this.props.authenticateUser(loginFormData)
  }
  render() {
    return (
      <div>
        <NavBar />
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" />
          <br />
          <label>Password</label>
          <input type="password" name="password" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, {
  authenticateUser
})(Login)
