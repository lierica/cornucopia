const API_URL = "http://localhost:3000/api/v1"

export const getSurpluses = () => {
  return (dispatch) => {
    return fetch(`${API_URL}/surpluses`)
      .then((resp) => resp.json())
      .then((surpluses) => dispatch(setSurpluses(surpluses)))
  }
}

export const setSurpluses = (surpluses) => {
  return {
    type: "SET_SURPLUSES",
    surpluses
  }
}

export const addSurplusToIndex = (surplus) => {
  return {
    type: "ADD_SURPLUS_TO_INDEX",
    surplus
  }
}

export const deleteSurplus = (surplusId) => {
  return (dispatch) => {
    return fetch(`${API_URL}/surpluses/${surplusId}`, {
      method: "DELETE"
    })
      .then((resp) => resp.json())
      .then((surplus) => dispatch(deleteSurplusFromIndex(surplus.surplus_id)))
  }
}

export const deleteSurplusFromIndex = (surplusId) => {
  return {
    type: "DELETE_SURPLUS_FROM_INDEX",
    surplusId
  }
}
