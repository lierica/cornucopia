const defaultState = { profile: {}, loading: false }
const initialState = { currentUser: {} }

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      console.log("SET CURRENT USER", action.user)

      const { id, email } = action.user
      return { ...state, currentUser: { id, email } }
    case "LOGOUT_USER":
      return { ...state, currentUser: {}, login_error: false }
    case "LOGIN_ERROR":
      return { ...state, currentUser: {}, login_error: true }
    default:
      return state
  }
}

export const currentUser = (state = defaultState, action) => {
  switch (action.type) {
    case "ASYNC_START":
      return { ...state, profile: {}, loading: true }
    case "FETCH_USER_INFO":
      console.log("FETCHING USER", action.user)
      return {
        ...state,
        profile: action.user,
        loading: false
      }
    default:
      return state
  }
}
