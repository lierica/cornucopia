export default (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_UPDATE_SURPLUS_FORM_RENDER":
      return !state
    default:
      return state
  }
}
