import React, { Component } from "react"
import { changeView } from "./actions/loginView"
import { updateNeedFormData } from "./actions/needFormData"
import { updateNeed } from "./actions/needs"
import { connect } from "react-redux"

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
      <div>
        <h1>Edit Need</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
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
            name="fulfill_by_date"
            value={fulfill_by_date}
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
