import React, { Component } from "react"
import { changeView } from "./actions/loginView"
import { updateNeedFormData } from "./actions/needFormData"
import { updateNeed } from "./actions/needs"
import { connect } from "react-redux"
import "./style/createUpdateForm.css"

class NeedEditForm extends Component {
  componentDidMount() {
    const currentNeed = this.props.needs.find(
      (need) => need.id === this.props.needId
    )
    this.props.updateNeedFormData(currentNeed)
  }

  handleChange = (e) => {
    const { name, value } = e.target
    const needFormData = Object.assign({}, this.props.needFormData, {
      [name]: value,
      organization_id: this.props.user.organization.id,
      user_id: this.props.user.id
    })
    this.props.updateNeedFormData(needFormData)
  }

  handleClick = (e) => {
    this.props.changeView("NeedShow")
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateNeed(this.props.needFormData, this.props.needId)
    this.props.changeView("NeedShow")
  }

  render() {
    const {
      title,
      description,
      category,
      units,
      unit_category,
      location,
      fulfill_by_date
    } = this.props.needFormData
    return (
      <div className="column" id="createUpdateForm">
        <form onSubmit={(e) => this.handleSubmit(e)} className="ui form">
          <h1>Edit a Need</h1>
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
              {parseInt(this.props.needFormData.units) === 1 ||
              this.props.needFormData.units === "" ? (
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
          <div className="field">
            <label>Fulfill By</label>
            <input
              type="date"
              name="fulfill_by_date"
              value={fulfill_by_date}
              onChange={(e) => this.handleChange(e)}
            />
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
    needId: parseInt(state.needShowId),
    needs: state.needs,
    needFormData: state.needFormData,
    user: state.currentUser.profile
  }
}

export default connect(mapStateToProps, {
  updateNeedFormData,
  changeView,
  updateNeed
})(NeedEditForm)
