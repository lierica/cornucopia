import React from "react"
import { connect } from "react-redux"

const SurplusIndex = (props) => {
  console.log("surplus index props", props)
  return <div>surplusIndex</div>
}

const mapStateToProps = (state) => {
  return {
    surpluses: state.surpluses
  }
}

export default connect(mapStateToProps, null)(SurplusIndex)
