const API_URL = "http://localhost:3000/api/v1/"

export const createUser = (userFormData, history) => {
  return (dispatch) => {
    return fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
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

export const authenticateUser = (loginFormData) => {}
