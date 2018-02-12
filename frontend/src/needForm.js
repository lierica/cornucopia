import React from "react"
import { updateNeedFormData } from "./actions/needFormData"
import { toggleNeedFormRender } from "./actions/needFormRender"
import { createNeed } from "./actions/needs"
import { connect } from "react-redux"

const NeedForm = (props) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target
    const needFormData = Object.assign({}, props.needFormData, {
      [name]: value,
      organization_id: props.user.organization.id,
      user_id: props.user.id
    })
    props.updateNeedFormData(needFormData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.createNeed(props.needFormData)
    props.toggleNeedFormRender()
  }

  const {
    title,
    description,
    category,
    units,
    unit_category,
    location,
    fulfill_by_date
  } = props.needFormData

  return (
    <div>
      <h1>New Need</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => handleOnChange(e)}
        />
        <br />
        <label>Description</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => handleOnChange(e)}
        >
          Description
        </textarea>
        <br />
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => handleOnChange(e)}
        />
        <br />
        <label>Units</label>
        <input
          type="number"
          name="units"
          value={units}
          onChange={(e) => handleOnChange(e)}
        />
        <label>Unit Category</label>
        <select
          name="unit_category"
          value={unit_category}
          onChange={(e) => handleOnChange(e)}
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
          onChange={(e) => handleOnChange(e)}
        />
        <br />
        <br />
        <label>Fulfill By</label>
        <input
          type="date"
          name="fulfill_by_date"
          value={fulfill_by_date}
          onChange={(e) => handleOnChange(e)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    needFormData: state.needFormData,
    user: state.currentUser.profile
  }
}

export default connect(mapStateToProps, {
  updateNeedFormData,
  createNeed,
  toggleNeedFormRender
})(NeedForm)
