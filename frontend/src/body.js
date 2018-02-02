import React from "react"
import { withRouter } from "react-router-dom"

const Body = (props) => {
  const handleSignup = () => {
    props.history.push("/signup")
  }

  return (
    <div className="body">
      <h1>body</h1>
      <button onClick={() => handleSignup()}>Get Started</button>
    </div>
  )
}

export default withRouter(Body)
