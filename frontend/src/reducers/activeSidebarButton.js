const initialState = "Dashboard"

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_ACTIVE_SIDEBAR_BUTTON":
      return action.button
    case "RESET_ACTIVE_SIDEBAR_BUTTON":
      return initialState
    default:
      return state
  }
}
