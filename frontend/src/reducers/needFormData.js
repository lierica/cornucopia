const initialState = {
  title: "",
  description: "",
  category: "",
  units: "",
  unit_category: "",
  location: "",
  fulfill_by_date: "",
  user_id: "",
  organization_id: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEED_FORM_DATA":
      return action.needFormData
    default:
      return initialState
  }
}
