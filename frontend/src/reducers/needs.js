export default (state = [], action) => {
  switch (action.type) {
    case "SET_NEEDS":
      return action.needs
    case "ADD_NEED_TO_INDEX":
      return state.concat(action.need)
    case "DELETE_NEED_FROM_INDEX":
      return state.filter((need) => need.id !== action.needId)
    case "UPDATE_NEED_IN_INDEX":
      let newNeeds = state.filter((need) => need.id !== action.need.id)
      return newNeeds.concat(action.need)
    default:
      return state
  }
}
