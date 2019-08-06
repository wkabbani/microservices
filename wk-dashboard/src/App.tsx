import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./features/SignIn/SignIn";
import SignUp from "./features/SignUp/SignUp";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;
