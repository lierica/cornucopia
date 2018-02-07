const initialState = ""

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_VIEW":
      return action.view
    case "RESET_VIEW":
      return ""
    default:
      return state
  }
}
