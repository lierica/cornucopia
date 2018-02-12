import React, { Component } from "react"
import NavBar from "./navbar"
import { loginUser } from "./actions/currentUser"
import { updateLoginFormData } from "./actions/loginFormData"
import { connect } from "react-redux"
import "./style/login.css"

const Login = (props) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target
    const loginFormData = Object.assign({}, props.loginFormData, {
      [name]: value
    })
    props.updateLoginFormData(loginFormData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.loginUser(props.loginFormData, props.history)
  }

  const { email, password } = props.loginFormData

  return (
    <div id="login">
      <div className="ui fluid container">
        <NavBar />
      </div>
      <h1>Log In</h1>
      <div className="ui grid" id="login-content">
        <form className="ui big form" onSubmit={(e) => handleSubmit(e)}>
          <label>Email</label>
          <div className="fourteen wide field">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <label>Password</label>
          <div className="fourteen wide field">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <input className="ui large button" type="submit" id="login-submit" />
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginFormData
  }
}

export default connect(mapStateToProps, {
  loginUser,
  updateLoginFormData
})(Login)
