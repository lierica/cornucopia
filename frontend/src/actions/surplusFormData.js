export const updateSurplusFormData = (surplusFormData) => {
  return {
    type: "UPDATE_SURPLUS_FORM_DATA",
    surplusFormData
  }
}

export const resetSurplusFormData = () => {
  return {
    type: "RESET_SURPLUS_FORM_DATA"
  }
}
