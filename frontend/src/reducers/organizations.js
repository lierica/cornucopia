export default (state = [], action) => {
  switch (action.type) {
    case "SET_ORGANIZATIONS":
      return action.organizations
    default:
      return state
  }
}
