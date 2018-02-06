export default (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_NEED_FORM_RENDER":
      return !state
    default:
      return state
  }
}
