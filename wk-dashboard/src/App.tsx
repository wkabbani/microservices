import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import indigo from "@material-ui/core/colors/indigo";

import { Provider } from "react-redux";

import NavBar from "./features/Navigation/NavBar";
import store from "./redux/store";

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
          <NavBar />
        </MuiThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
