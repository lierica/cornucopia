const API_URL = "http://localhost:3000/api/v1"

const HEADERS = {
  "Content-Type": "application/json",
  Accepts: "application/json"
}

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
      .then((response) => response.json())
      .then((surplus) => {
        if (surplus.error) {
          alert(surplus.error)
        } else {
          dispatch({ type: "DELETE_SURPLUS_FROM_USER", surplusId })
          dispatch({ type: "DELETE_SURPLUS_FROM_INDEX", surplusId })
        }
      })
      .catch((error) => alert(error))
  }
}

export const createSurplus = (surplusFormData) => {
  return (dispatch) => {
    return fetch(`${API_URL}/surpluses`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({ surplus: surplusFormData })
    })
      .then((response) => response.json())
      .then((surplus) => {
        if (surplus.error) {
          alert(surplus.error)
        } else {
          dispatch({ type: "ADD_SURPLUS_TO_USER", surplus })
          dispatch({ type: "ADD_SURPLUS_TO_INDEX", surplus })
        }
      })
      .catch((error) => alert(error))
  }
}

export const updateSurplus = (surplusFormData, surplusId) => {
  return (dispatch) => {
    return fetch(`${API_URL}/surpluses/${surplusId}`, {
      method: "PATCH",
      headers: HEADERS,
      body: JSON.stringify({ surplus: surplusFormData })
    })
      .then((response) => response.json())
      .then((surplus) => {
        if (surplus.error) {
          alert(surplus.error)
        } else {
          dispatch({ type: "UPDATE_SURPLUS_IN_USER", surplus })
          dispatch({ type: "UPDATE_SURPLUS_IN_INDEX", surplus })
        }
      })
      .catch((error) => alert(error))
  }
}
