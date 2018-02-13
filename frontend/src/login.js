import React from "react"
import NavBar from "./navbar"
import { loginUser } from "./actions/currentUser"
import { updateLoginFormData } from "./actions/loginFormData"
import { connect } from "react-redux"
import "./style/loginSignup.css"

const Login = (props) => {
  const handleChange = (e) => {
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
              Log In
            </h1>
            <img id="cornucopiaIcon" src={require("./media/icon.png")} alt="" />
          </div>
          <form className="ui large form" onSubmit={(e) => handleSubmit(e)}>
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon" />
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon" />
                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <input className="ui large button" type="submit" />
            </div>
          </form>
          <div className="ui message">
            New to us? <a href="/signup"> Sign Up</a>
          </div>
        </div>
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
