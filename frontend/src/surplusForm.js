import React from "react"
import { updateSurplusFormData } from "./actions/surplusFormData"
import { createSurplus } from "./actions/surpluses"
import { changeView } from "./actions/loginView"
import { connect } from "react-redux"
import "./style/createUpdateForm.css"

const SurplusForm = (props) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    const surplusFormData = Object.assign({}, props.surplusFormData, {
      [name]: value,
      organization_id: props.user.organization.id,
      user_id: props.user.id
    })
    props.updateSurplusFormData(surplusFormData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.createSurplus(props.surplusFormData)
    props.changeView("Surpluses")
  }

  const handleClick = (e) => {
    props.changeView("Surpluses")
  }

  const {
    title,
    description,
    category,
    units,
    unit_category,
    location,
    available_date,
    claim_by_date
  } = props.surplusFormData

  return (
    <div className="column" id="createUpdateForm">
      <h1 style={{ fontFamily: "Nunito, sans-serif" }}>Create Surplus</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="ui form">
        <div className="field">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => handleChange(e)}
            placeholder="Title"
          />
        </div>
        <div className="field">
          <textarea
            name="description"
            value={description}
            onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
              placeholder="Category"
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
              placeholder="Units"
            />
          </div>
          <div className="field">
            {parseInt(props.surplusFormData.units) === 1 ||
            props.surplusFormData.units === "" ? (
              <select
                className="ui dropdown"
                name="unit_category"
                value={unit_category}
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="field">
            <label>Claim By</label>
            <input
              type="date"
              name="claim_by_date"
              value={claim_by_date}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <input className="ui button" type="submit" />
        <button
          type="button"
          className="ui button"
          onClick={(e) => handleClick(e)}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    surplusFormData: state.surplusFormData,
    user: state.currentUser.profile
  }
}

export default connect(mapStateToProps, {
  updateSurplusFormData,
  createSurplus,
  changeView
})(SurplusForm)
