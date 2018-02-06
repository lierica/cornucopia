const initialState = {
  title: "",
  description: "",
  category: "",
  units: "",
  unit_category: "",
  location: "",
  available_date: "",
  claim_by_date: "",
  user_id: "",
  organization_id: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SURPLUS_FORM_DATA":
      return action.surplusFormData
    default:
      return initialState
  }
}
