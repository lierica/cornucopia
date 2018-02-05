import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { fetchUser } from "../actions/currentUser"

const withAuth = (WrappedComponent) => {
  class AuthedComponent extends React.Component {
    state = {
      authCompleted: this.props.loggedIn
    }

    debugger
    componentDidMount() {
      if (localStorage.getItem("token")) {
        this.props.fetchUser()
      } else {
        this.setState({ authCompleted: true })
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn) {
        this.setState({ authCompleted: true })
      }
    }

    render() {
      if (this.state.authCompleted) {
        return this.props.loggedIn ? (
          <WrappedComponent {...this.props} />
        ) : (
          <Redirect to="/login" />
        )
      } else {
        return null
      }
    }
  }

  const mapStateToProps = (state) => ({
    loggedIn: !!state.auth.currentUser.id
  })

  return connect(mapStateToProps, fetchUser)(AuthedComponent)
}

export default withAuth
