import React from "react"
import { changeView } from "./actions/loginView"
import { updateSurplusFormData } from "./actions/surplusFormData"
import { updateSurplus } from "./actions/surpluses"
import { connect } from "react-redux"

const SurplusEditForm = (props) => {
  const currentSurplus = props.surpluses.find(
    (surplus) => surplus.id === props.surplusId
  )

  console.log(currentSurplus)

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
    props.updateSurplus(props.surplusFormData, props.surplusId)
    props.changeView("SurplusShow")
  }

  return (
    <div>
      <h1>Edit Surplus</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder={currentSurplus.title}
          value={title}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label>Description</label>
        <textarea
          name="description"
          placeholder={currentSurplus.description}
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
          placeholder={currentSurplus.category}
          value={category}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label>Units</label>
        <input
          type="number"
          name="units"
          placeholder={currentSurplus.units}
          value={units}
          onChange={(e) => handleChange(e)}
        />
        <label>Unit Category</label>
        <select
          name="unit_category"
          placeholder={currentSurplus.unit_category}
          placeholder={currentSurplus.unit_category}
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
          value={currentSurplus.location}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label>Available On</label>
        <input
          type="date"
          name="available_date"
          value={currentSurplus.available_date}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label>Claim By</label>
        <input
          type="date"
          name="claim_by_date"
          value={currentSurplus.claim_by_date}
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
