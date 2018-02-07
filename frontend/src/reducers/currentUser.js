const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case "ASYNC_START":
      return { ...state, profile: {} }
    case "SET_NEW_USER":
      console.log("SET CURRENT USER", action.user.user)
      return { ...state, profile: action.user.user, loggedIn: true }
    case "FETCH_USER_INFO":
      console.log("FETCHING USER", action.user)
      return { ...state, profile: action.user, loggedIn: true }
    case "LOGOUT_USER":
      return { ...state, profile: {}, loggedIn: false }
    case "ADD_SURPLUS":
      return {
        ...state,
        profile: {
          ...state.profile,
          surpluses: state.profile.surpluses.concat(action.surplus)
        }
      }
    case "ADD_NEED":
      return {
        ...state,
        profile: {
          ...state.profile,
          needs: state.profile.needs.concat(action.need)
        }
      }
    default:
      return state
  }
}
