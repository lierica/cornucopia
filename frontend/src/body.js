import React from "react"

const Body = (props) => {
  return (
    <div className="body">
      <h1>body</h1>
      <button onClick={() => props.handleSignup()}>Get Started</button>
    </div>
  )
}

export default Body
