import React, { Component } from "react"
import { changeView } from "./actions/loginView"
import { updateSurplusFormData } from "./actions/surplusFormData"
import { updateSurplus } from "./actions/surpluses"
import { connect } from "react-redux"
import "./style/createUpdateForm.css"

class SurplusEditForm extends Component {
  componentDidMount() {
    const currentSurplus = this.props.surpluses.find(
      (surplus) => surplus.id === this.props.surplusId
    )
    this.props.updateSurplusFormData(currentSurplus)
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

  handleClick = () => {
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
      <div className="column" id="createUpdateForm">
        <h1>Edit Surplus</h1>
        <form onSubmit={(e) => this.handleSubmit(e)} className="ui form">
          <div className="field">
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => this.handleChange(e)}
              placeholder="Title"
            />
          </div>
          <div className="field">
            <textarea
              name="description"
              value={description}
              onChange={(e) => this.handleChange(e)}
              rows="3"
              placeholder="Description"
            />
          </div>
          <div className="two fields">
            <div className="field">
              <input
                type="text"
                name="category"
                value={category}
                onChange={(e) => this.handleChange(e)}
                placeholder="Category"
              />
            </div>
            <div className="field">
              <input
                type="text"
                name="location"
                value={location}
                onChange={(e) => this.handleChange(e)}
                placeholder="Location"
              />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <input
                type="number"
                name="units"
                value={units}
                onChange={(e) => this.handleChange(e)}
                placeholder="Units"
              />
            </div>
            <div className="field">
              {parseInt(this.props.surplusFormData.units) === 1 ||
              this.props.surplusFormData.units === "" ? (
                <select
                  className="ui dropdown"
                  name="unit_category"
                  value={unit_category}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="">Unit Category</option>
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
              ) : (
                <select
                  className="ui dropdown"
                  name="unit_category"
                  value={unit_category}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="">Unit Category</option>
                  <option value="piece">Pieces</option>
                  <option value="bag">Bags</option>
                  <option value="box">Boxes</option>
                  <option value="pound">Pounds</option>
                  <option value="item">Items</option>
                  <option value="bottle">Bottles</option>
                  <option value="roll">Rolls</option>
                  <option value="can">Cans</option>
                  <option value="tube">Tubes</option>
                </select>
              )}
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Available On</label>
              <input
                type="date"
                name="available_date"
                value={available_date}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="field">
              <label>Claim By</label>
              <input
                type="date"
                name="claim_by_date"
                value={claim_by_date}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
          </div>
          <input className="ui button" type="submit" />
          <button className="ui button" onClick={(e) => this.handleClick(e)}>
            Cancel
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    surplusId: parseInt(state.surplusShowId),
    surpluses: state.surpluses,
    surplusFormData: state.surplusFormData,
    user: state.currentUser.profile
  }
}

export default connect(mapStateToProps, {
  updateSurplusFormData,
  changeView,
  updateSurplus
})(SurplusEditForm)
