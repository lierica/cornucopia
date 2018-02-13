import React from "react"
import { connect } from "react-redux"
import { changeSearchTerm } from "./actions/searchTerm"

const SearchBar = (props) => {
  const handleChange = (e) => {
    props.changeSearchTerm(e.target.value)
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search title or category"
          name="search"
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { searchTerm: state.searchTerm }
}

export default connect(mapStateToProps, { changeSearchTerm })(SearchBar)
