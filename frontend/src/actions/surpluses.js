const API_URL = "http://localhost:3000/api/v1"

export const setSurpluses = (surpluses) => {
  return {
    type: "SET_SURPLUSES",
    surpluses
  }
}

export const getSurpluses = () => {
  return (dispatch) => {
    return fetch(`${API_URL}/surpluses`)
      .then((resp) => resp.json())
      .then((surpluses) => dispatch(setSurpluses(surpluses)))
  }
}
