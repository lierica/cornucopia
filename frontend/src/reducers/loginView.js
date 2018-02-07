const initialState = ""

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_VIEW":
      return { ...state, view: action.view }
    case "RESET_VIEW":
      return { ...state, view: "" }
    default:
      return state
  }
}
