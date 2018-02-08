import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import currentUser from "./reducers/currentUser"
import organizations from "./reducers/organizations"
import needs from "./reducers/needs"
import surpluses from "./reducers/surpluses"
import loginView from "./reducers/loginView"
import userFormData from "./reducers/userFormData"
import loginFormData from "./reducers/loginFormData"
import surplusFormData from "./reducers/surplusFormData"
import needFormData from "./reducers/needFormData"
import surplusFormRender from "./reducers/surplusFormRender"
import needFormRender from "./reducers/needFormRender"
import surplusShowId from "./reducers/surplusShowId"
import needShowId from "./reducers/needShowId"
import likeFormRender from "./reducers/likeFormRender"
import pitchedNeedId from "./reducers/pitchedNeedId"

const reducers = combineReducers({
  currentUser,
  organizations,
  needs,
  surpluses,
  loginView,
  userFormData,
  loginFormData,
  surplusFormData,
  needFormData,
  surplusFormRender,
  needFormRender,
  likeFormRender,
  pitchedNeedId,
  surplusShowId,
  needShowId
})

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)
