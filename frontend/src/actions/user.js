const API_URL = "http://localhost:3000/api/v1/"

export const createUser = (userFormData) => {
  return (dispatch) => {
    return fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: userFormData })
    })
  }
}
