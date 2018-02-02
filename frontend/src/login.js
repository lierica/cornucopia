import React, { Component } from "react"
import NavBar from "./navbar"
import { authenticateUser } from "./actions/user"
import { updateLoginFormData } from "./actions/loginFormData"
import { connect } from "react-redux"

class Login extends Component {
  constructor(props) {
    super()
  }

  handleOnChange = (e) => {
    const { name, value } = e.target
    const loginFormData = Object.assign({}, this.props.loginFormData, {
      [name]: value
    })
    this.props.updateLoginFormData(loginFormData)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.authenticateUser(this.props.loginFormData, this.props.history)
  }
  render() {
    const { email, password } = this.props.loginFormData
    return (
      <div>
        <NavBar />
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleOnChange}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginFormData
  }
}
export default connect(mapStateToProps, {
  authenticateUser,
  updateLoginFormData
})(Login)
