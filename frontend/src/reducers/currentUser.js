const defaultState = { profile: {}, loading: false }
const initialState = { currentUser: {} }

export const auth = (state = initialState, action) => {
  console.log("setting current user", action)

  switch (action.type) {
    case "SET_CURRENT_USER":
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
      console.log("FETCHING USER", action)
      return {
        ...state,
        profile: {
          first_name: action.user.first_name,
          last_name: action.user.last_name,
          phone: action.user.phone
        },
        loading: false
      }
    default:
      return state
  }
}
