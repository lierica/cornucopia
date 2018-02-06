import React from "react"
import "./style/Dashboard.css"
import SurplusForm from "./surplusForm"

const SurplusContainer = () => {
  return (
    <div className="loggedin-wrapper">
      <h1>Surpluses</h1>

      <p>Search Bar</p>

      <p>Filter</p>
      <button>Create Surplus</button>
      <SurplusForm />
      <p>Surplus list</p>
    </div>
  )
}

export default SurplusContainer
