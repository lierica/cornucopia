import React from "react"
import { updateNeedFormData } from "./actions/needFormData"
import { changeView } from "./actions/loginView"
import { createNeed } from "./actions/needs"
import { connect } from "react-redux"
import "./style/createUpdateForm.css"

const NeedForm = (props) => {
  const handleChange = (e) => {
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
    props.changeView("Needs")
  }

  const handleClick = (e) => {
    props.changeView("Needs")
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
    <div className="column" id="createUpdateForm">
      <form onSubmit={(e) => handleSubmit(e)} className="ui form">
        <h1 style={{ fontFamily: "Nunito, sans-serif" }}>Create Need</h1>
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
            {parseInt(props.needFormData.units) === 1 ||
            props.needFormData.units === "" ? (
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
        <div className="field">
          <label>Fulfill By</label>
          <input
            type="date"
            name="fulfill_by_date"
            value={fulfill_by_date}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <input className="ui button" type="submit" />
        <button
          className="ui button"
          onClick={(e) => handleClick(e)}
          type="button"
        >
          Cancel
        </button>
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
  changeView
})(NeedForm)
