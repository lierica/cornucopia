const API_URL = "http://localhost:3000/api/v1"

const HEADERS = {
  "Content-Type": "application/json",
  Accepts: "application/json"
}

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

export const createNeed = (needFormData) => {
  return (dispatch) => {
    return fetch(`${API_URL}/needs`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({ need: needFormData })
    })
      .then((response) => response.json())
      .then((need) => {
        if (need.error) {
          alert(need.error)
        } else {
          dispatch({ type: "ADD_NEED_TO_USER", need })
          dispatch({ type: "ADD_NEED_TO_INDEX", need })
        }
      })
      .catch((error) => alert(error))
  }
}

export const deleteNeed = (needId) => {
  return (dispatch) => {
    return fetch(`${API_URL}/needs/${needId}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((need) => {
        if (need.error) {
          alert(need.error)
        } else {
          dispatch({ type: "DELETE_NEED_FROM_USER", needId })
          dispatch({ type: "DELETE_NEED_FROM_INDEX", needId })
        }
      })
      .catch((error) => alert(error))
  }
}
