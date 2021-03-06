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
    case "ADD_NEED_TO_USER":
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
    case "DELETE_NEED_FROM_USER":
      return {
        ...state,
        profile: {
          ...state.profile,
          needs: state.profile.needs.filter((need) => need.id !== action.needId)
        }
      }
    case "UPDATE_SURPLUS_IN_USER":
      let newUserSurpluses = state.profile.surpluses.filter(
        (surplus) => surplus.id !== action.surplus.id
      )
      return {
        ...state,
        profile: {
          ...state.profile,
          surpluses: newUserSurpluses.concat(action.surplus)
        }
      }
    case "UPDATE_NEED_IN_USER":
      let newUserNeeds = state.profile.needs.filter(
        (need) => need.id !== action.need.id
      )
      return {
        ...state,
        profile: {
          ...state.profile,
          needs: newUserNeeds.concat(action.need)
        }
      }
    default:
      return state
  }
}
