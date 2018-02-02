import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import App from "./App"
import Signup from "./signup"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
)
