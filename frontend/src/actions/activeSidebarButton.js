export const changeActiveSidebarButton = (button) => {
  return {
    type: "CHANGE_ACTIVE_SIDEBAR_BUTTON",
    button
  }
}

export const resetActiveSidebarButton = () => {
  return {
    type: "RESET_ACTIVE_SIDEBAR_BUTTON"
  }
}
