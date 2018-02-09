import React from "react"
import ReactDOM from "react-dom"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux"
import Store from "./store"
import App from "./App"
import Signup from "./signup"
import Login from "./login"
import DashboardContainer from "./dashboardContainer"

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={DashboardContainer} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
)
