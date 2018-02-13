export const changeView = (view) => {
  return (dispatch) => {
    dispatch({ type: "CHANGE_VIEW", view })
    dispatch({ type: "RESET_SEARCH_TERM" })
  }
}

export const resetView = (view) => {
  return { type: "RESET_VIEW" }
}
