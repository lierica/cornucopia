const API_URL = "http://localhost:3000/api/v1"
const HEADERS = {
  "Content-Type": "application/json",
  Accepts: "application/json"
}

const getWithToken = (url) => {
  const token = localStorage.getItem("token")
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json",
      Authorization: token
    }
  }).then((res) => res.json())
}

const getCurrentUser = () => {
  return getWithToken(`${API_URL}/current_user`)
}

const login = (data) => {
  return fetch(`${API_URL}/login/`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(data)
  }).then((res) => res.json())
}

export const adapter = {
  auth: {
    login,
    getCurrentUser
  }
}
