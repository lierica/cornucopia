const API_URL = "http://localhost:3000/api/v1/"
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
          history.push("/dashboard")
        }
      })
      .catch((error) => alert(error))
  }
}

export const authenticateUser = (loginFormData, history) => {
  return (dispatch) => {
    return fetch(`${API_URL}/auth`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({ loginFormData })
    })
      .then((response) => response.json())
      .then.then((user) => {
        if (user.error) {
          alert(user.error)
        } else {
          history.push("/dashboard")
        }
      })
      .catch((error) => alert(error))
  }
}
