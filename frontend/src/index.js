import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import App from "./App"
import Signup from "./signup"

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/signup" component={Signup} />
    </div>
  </Router>,
  document.getElementById("root")
)
