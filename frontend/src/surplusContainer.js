import React from "react"
import "./style/Dashboard.css"
import SurplusForm from "./surplusForm"

const SurplusContainer = () => {
  return (
    <div className="loggedin-wrapper">
      <div>
        <h1>Surpluses</h1>

        <p>Search Bar</p>

        <p>Filter</p>
        <button>Create Surplus</button>
        <SurplusForm />

        <p>Surplus list</p>
      </div>
    </div>
  )
}

export default SurplusContainer
