import React from "react"
import ReactDOM from "react-dom"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import App from "./App"
import Signup from "./signup"
import Login from "./login"
import Dashboard from "./dashboard"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
)
