const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SURPLUS_SHOW_ID":
      return action.surplusShowId
    default:
      return state
  }
}
