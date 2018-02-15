import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import currentUser from "./reducers/currentUser"
import needs from "./reducers/needs"
import surpluses from "./reducers/surpluses"
import loginView from "./reducers/loginView"
import activeSidebarButton from "./reducers/activeSidebarButton"
import userFormData from "./reducers/userFormData"
import loginFormData from "./reducers/loginFormData"
import surplusFormData from "./reducers/surplusFormData"
import needFormData from "./reducers/needFormData"
import surplusFormRender from "./reducers/surplusFormRender"
import needFormRender from "./reducers/needFormRender"
import surplusShowId from "./reducers/surplusShowId"
import needShowId from "./reducers/needShowId"
import pitchedNeedId from "./reducers/pitchedNeedId"
import searchTerm from "./reducers/searchTerm"

const reducers = combineReducers({
  currentUser,
  needs,
  surpluses,
  loginView,
  activeSidebarButton,
  userFormData,
  loginFormData,
  surplusFormData,
  needFormData,
  surplusFormRender,
  needFormRender,
  pitchedNeedId,
  surplusShowId,
  needShowId,
  searchTerm
})

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)
