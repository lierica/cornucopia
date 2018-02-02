const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  password: "",
  organization: "",
  organization_category: "",
  role: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER_FORM_DATA":
      return action.userFormData
    default:
      return initialState
  }
}
