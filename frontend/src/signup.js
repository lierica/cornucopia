import React from "react"
import Header from "./header"

const Signup = () => {
  return (
    <div>
      <Header />
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <br />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <br />
        <input type="text" placeholder="Organization Name" />
        <input type="text" placeholder="Organization Type" />
        <input type="text" placeholder="Role" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Signup
