export default (state = {}, action) => {
  switch (action.type) {
    case "GET_BEERS_SUCCESS":
      return action.beers
    case "CREATE_BEER_SUCCESS":
      return state.concat(action.beer)

    default:
      return state
  }
}
