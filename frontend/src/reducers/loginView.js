const initialState = ""

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_VIEW":
      return { ...state, view: action.view }
    default:
      return state
  }
}
