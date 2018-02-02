import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import surpluses from "./reducers/surpluses"
import needs from "./reducers/needs"
import organizations from "./reducers/organizations"
import user from "./reducers/user"
import userFormData from "./reducers/userFormData"

const reducers = combineReducers({
  user,
  userFormData,
  organizations,
  surpluses,
  needs
})

export default createStore(reducers, applyMiddleware(thunk))
