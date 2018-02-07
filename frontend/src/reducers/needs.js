export default (state = [], action) => {
  switch (action.type) {
    case "SET_NEEDS":
      return action.needs
    case "ADD_NEED_TO_INDEX":
      return state.concat(action.need)
    default:
      return state
  }
}
