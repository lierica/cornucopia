import React from "react"
import NeedForm from "./needForm"
import "./style/Dashboard.css"

const NeedContainer = () => {
  return (
    <div className="loggedin-wrapper">
      <div>
        <h1>Needs</h1>

        <p>Search Bar</p>

        <p>Filter</p>
        <button>Create Need</button>
        <NeedForm />

        <p>Need list</p>
      </div>
    </div>
  )
}

export default NeedContainer
