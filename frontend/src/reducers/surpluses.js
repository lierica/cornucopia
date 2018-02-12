export default (state = [], action) => {
  switch (action.type) {
    case "SET_SURPLUSES":
      return action.surpluses
    case "ADD_SURPLUS_TO_INDEX":
      return state.concat(action.surplus)
    case "DELETE_SURPLUS_FROM_INDEX":
      return state.filter((surplus) => surplus.id !== action.surplusId)
    case "UPDATE_SURPLUS_IN_INDEX":
      let newSurpluses = state.filter(
        (surplus) => surplus.id !== action.surplus.id
      )
      return newSurpluses.concat(action.surplus)
    default:
      return state
  }
}
