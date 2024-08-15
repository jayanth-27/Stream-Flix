import React from "react";
import Home from "./home_page/Home"
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App()
{
  return (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movies">
        < Home />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;