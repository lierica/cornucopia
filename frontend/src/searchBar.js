import React from "react"
import { connect } from "react-redux"
import { changeSearchTerm } from "./actions/searchTerm"
import "./style/searchbar.css"

const SearchBar = (props) => {
  const handleChange = (e) => {
    props.changeSearchTerm(e.target.value)
  }
  return (
    <div className="ui fluid search" id="searchbar">
      <div className="ui icon input">
        <input
          type="text"
          placeholder="Search title or category..."
          name="search"
          onChange={(e) => handleChange(e)}
          id="searchbar"
        />
        <i className="large search icon" />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { searchTerm: state.searchTerm }
}

export default connect(mapStateToProps, { changeSearchTerm })(SearchBar)
