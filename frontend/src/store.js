import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import organizations from "./reducers/organizations"
import currentUser from "./reducers/currentUser"
import userFormData from "./reducers/userFormData"
import loginFormData from "./reducers/loginFormData"
import loginView from "./reducers/loginView"
import surplusFormData from "./reducers/surplusFormData"
import needFormData from "./reducers/needFormData"

const reducers = combineReducers({
  currentUser,
  organizations,
  loginView,
  userFormData,
  loginFormData,
  surplusFormData,
  needFormData
})

export default createStore(reducers, applyMiddleware(thunk))
