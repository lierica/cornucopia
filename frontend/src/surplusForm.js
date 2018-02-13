import React from "react"
import { updateSurplusFormData } from "./actions/surplusFormData"
import { createSurplus } from "./actions/surpluses"
import { toggleSurplusFormRender } from "./actions/surplusFormRender"
import { connect } from "react-redux"

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
    props.toggleSurplusFormRender()
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
    <div>
      <h1>New Surplus</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label>Description</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => handleChange(e)}
        >
          Description
        </textarea>
        <br />
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label>Units</label>
        <input
          type="number"
          name="units"
          value={units}
          onChange={(e) => handleChange(e)}
        />
        <label>Unit Category</label>
        <select
          name="unit_category"
          value={unit_category}
          onChange={(e) => handleChange(e)}
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
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label>Available On</label>
        <input
          type="date"
          name="available_date"
          value={available_date}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label>Claim By</label>
        <input
          type="date"
          name="claim_by_date"
          value={claim_by_date}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input type="submit" />
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
  toggleSurplusFormRender
})(SurplusForm)
