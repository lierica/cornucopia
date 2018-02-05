const API_URL = "http://localhost:3000/api/v1"

export const setOrganizations = (organizations) => {
  return {
    type: "SET_ORGANIZATIONS",
    organizations
  }
}

export const getOrganizations = () => {
  return (dispatch) => {
    return fetch(`${API_URL}/organizations`)
      .then((resp) => resp.json())
      .then((organizations) => dispatch(setOrganizations(organizations)))
  }
}
