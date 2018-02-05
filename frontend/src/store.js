import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import surpluses from "./reducers/surpluses"
import needs from "./reducers/needs"
import organizations from "./reducers/organizations"
import currentUser from "./reducers/currentUser"
import userFormData from "./reducers/userFormData"
import loginFormData from "./reducers/loginFormData"

const reducers = combineReducers({
  currentUser,
  userFormData,
  loginFormData,
  organizations,
  surpluses,
  needs
})

export default createStore(reducers, applyMiddleware(thunk))
