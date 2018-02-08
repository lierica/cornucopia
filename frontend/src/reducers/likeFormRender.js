export default (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_LIKE_FORM_RENDER":
      return !state
    default:
      return state
  }
}
