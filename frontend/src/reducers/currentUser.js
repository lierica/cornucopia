const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEW_USER":
      return { ...state, profile: action.user.user, loggedIn: true }
    case "FETCH_USER_INFO":
      return { ...state, profile: action.user, loggedIn: true }
    case "LOGOUT_USER":
      return { ...state, profile: {}, loggedIn: false }
    case "ADD_SURPLUS_TO_USER":
      return {
        ...state,
        profile: {
          ...state.profile,
          surpluses: state.profile.surpluses.concat(action.surplus)
        }
      }
    case "ADD_NEED_USER":
      return {
        ...state,
        profile: {
          ...state.profile,
          needs: state.profile.needs.concat(action.need)
        }
      }
    case "DELETE_SURPLUS_FROM_USER":
      return {
        ...state,
        profile: {
          ...state.profile,
          surpluses: state.profile.surpluses.filter(
            (surplus) => surplus.id !== action.surplusId
          )
        }
      }
    default:
      return state
  }
}
