import React, { Component } from "react"
import { changeView } from "./actions/loginView"
import { updateSurplusFormData } from "./actions/surplusFormData"
import { updateSurplus } from "./actions/surpluses"
import { connect } from "react-redux"

class SurplusEditForm extends Component {
  // const currentSurplus = props.surpluses.find(
  //   (surplus) => surplus.id === props.surplusId
  // )
  componentDidMount() {
    this.props.updateSurplusFormData(this.props.currentSurplus)
  }

  handleChange = (e) => {
    const { name, value } = e.target
    const surplusFormData = Object.assign({}, this.props.surplusFormData, {
      [name]: value,
      organization_id: this.props.user.organization.id,
      user_id: this.props.user.id
    })
    this.props.updateSurplusFormData(surplusFormData)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateSurplus(this.props.surplusFormData, this.props.surplusId)
    this.props.changeView("SurplusShow")
  }

  render() {
    const {
      title,
      description,
      category,
      units,
      unit_category,
      location,
      available_date,
      claim_by_date
    } = this.props.surplusFormData
    return (
      <div>
        <h1>Edit Surplus</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={this.props.surplusFormData.title}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label>Description</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => this.handleChange(e)}
          >
            Description
          </textarea>
          <br />
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label>Units</label>
          <input
            type="number"
            name="units"
            value={units}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Unit Category</label>
          <select
            name="unit_category"
            onChange={(e) => this.handleChange(e)}
            value={unit_category}
          >
            <option value="">Select</option>
            <option value="piece">Piece</option>
            <option value="bag">Bag</option>
            <option value="box">Box</option>
            <option value="pound">Pound</option>
            <option value="item">Item</option>
            <option value="bottle">Bottle</option>
            <option value="roll">Roll</option>
            <option value="can">Can</option>
            <option value="tube">Tube</option>
          </select>
          <br />
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label>Available On</label>
          <input
            type="date"
            name="available_date"
            value={available_date}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label>Claim By</label>
          <input
            type="date"
            name="claim_by_date"
            value={claim_by_date}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let sfd = state.surpluses.find(
    (surplus) => surplus.id === parseInt(state.surplusId)
  )

  return {
    surplusId: parseInt(state.surplusShowId),
    surpluses: state.surpluses,
    surplusFormData: state.surplusFormData,
    user: state.currentUser.profile,
    currentSurplus: sfd
  }
}

export default connect(mapStateToProps, {
  updateSurplusFormData,
  changeView,
  updateSurplus
})(SurplusEditForm)
