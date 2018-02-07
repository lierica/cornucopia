const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NEED_SHOW_ID":
      return action.needShowId
    default:
      return state
  }
}
