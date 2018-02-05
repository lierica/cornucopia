const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case "ASYNC_START":
      return { ...state, profile: {} }
    case "SET_CURRENT_USER":
      console.log("SET CURRENT USER", action.user)
      const { id, email } = action.user
      return { ...state, profile: { id, email }, loggedIn: false }
    case "FETCH_USER_INFO":
      console.log("FETCHING USER", action.user)
      return { ...state, profile: action.user, loggedIn: true }
    case "LOGOUT_USER":
      console.log("LOGGINGOUT", action.user)
      return { ...state, profile: {}, loggedIn: false }
    case "LOGIN_ERROR":
      return { ...state, profile: {}, loggedIn: false }
    default:
      return state
  }
}
