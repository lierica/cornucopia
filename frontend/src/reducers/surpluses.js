export default (state = [], action) => {
  switch (action.type) {
    case "SET_SURPLUSES":
      return action.surpluses
    case "ADD_SURPLUS_TO_INDEX":
      return state.concat(action.surplus)
    default:
      return state
  }
}
