import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { fetchUser } from "../actions/currentUser"

const withAuth = (WrappedComponent) => {
  class AuthedComponent extends React.Component {
    state = {
      authCompleted: this.props.loggedIn
    }
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

  const mapStateToProps = (state) => {
    return {
      loggedIn: state.currentUser.loggedIn
    }
  }
  return connect(mapStateToProps, { fetchUser })(AuthedComponent)
}

export default withAuth
