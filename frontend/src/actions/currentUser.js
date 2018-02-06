import { adapter } from "../services"

const API_URL = "http://localhost:3000/api/v1"
const HEADERS = {
  "Content-Type": "application/json",
  Accepts: "application/json"
}

export const createUser = (userFormData, history) => {
  return (dispatch) => {
    return fetch(`${API_URL}/users`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({ user: userFormData })
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.error) {
          alert(user.error)
        } else {
          localStorage.setItem("token", user.jwt)
          dispatch({ type: "SET_NEW_USER", user })
          history.push("/dashboard")
        }
      })
      .catch((error) => alert(error))
  }
}

export const loginUser = (loginFormData, history) => {
  return (dispatch) => {
    return fetch(`${API_URL}/auth`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({ loginFormData })
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.error) {
          alert(user.error)
        } else {
          localStorage.setItem("token", user.jwt)
          dispatch({ type: "SET_CURRENT_USER", user })
          history.push("/dashboard")
        }
      })
      .catch((error) => alert(error))
  }
}

export const fetchUser = () => (dispatch) => {
  dispatch({ type: "ASYNC_START" })
  adapter.auth.getCurrentUser().then((user) => {
    dispatch({ type: "FETCH_USER_INFO", user })
  })
}

export const logoutUser = () => {
  localStorage.removeItem("token")
  return { type: "LOGOUT_USER" }
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
          dispatch({ type: "ADD_SURPLUS", surplus })
        }
      })
      .catch((error) => alert(error))
  }
}
