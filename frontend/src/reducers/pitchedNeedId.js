const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PITCHED_NEED_ID":
      return action.pitchedNeedId
    default:
      return state
  }
}
