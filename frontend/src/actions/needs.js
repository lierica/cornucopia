const API_URL = "http://localhost:3000/api/v1"

export const setNeeds = (needs) => {
  return {
    type: "SET_NEEDS",
    needs
  }
}

export const getNeeds = () => {
  return (dispatch) => {
    return fetch(`${API_URL}/needs`)
      .then((resp) => resp.json())
      .then((needs) => dispatch(setNeeds(needs)))
  }
}
