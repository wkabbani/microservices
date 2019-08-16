import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import indigo from "@material-ui/core/colors/indigo";

import { Provider } from "react-redux";
import store from "./redux/store";

import NavBar from "./infrastructure/Navigation/NavBar";
import Todo from "./features/Todo/Todo";
import Blog from "./features/Blog/Blog";
import Dashboard from "./features/Dashboard/Dashboard";
import Sentiment from "./features/Sentiment/Sentiment";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: indigo
  }
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <NavBar>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/sentiment" component={Sentiment} />
              <Route exact path="/todo" component={Todo} />
              <Route exact path="/blog" component={Blog} />
            </Switch>
          </NavBar>
        </MuiThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
