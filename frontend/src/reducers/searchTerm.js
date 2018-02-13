const initialState = ""

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TERM":
      return action.searchTerm
    case "RESET_SEARCH_TERM":
      return initialState
    default:
      return state
  }
}
