import React from "react"
import { connect } from "react-redux"

const NeedIndex = (props) => {
  console.log("needindex props", props)

  return <div>needIndex</div>
}

const mapStateToProps = (state) => {
  return {
    needs: state.needs
  }
}

export default connect(mapStateToProps, null)(NeedIndex)
