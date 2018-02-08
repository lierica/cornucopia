export default (state = [], action) => {
  switch (action.type) {
    case "SET_NEEDS":
      return action.needs
    case "ADD_NEED_TO_INDEX":
      return state.concat(action.need)
    case "DELETE_NEED_FROM_INDEX":
      return state.filter((need) => need.id !== action.needId)
    default:
      return state
  }
}
