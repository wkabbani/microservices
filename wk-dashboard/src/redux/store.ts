import { createStore, applyMiddleware, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppAction } from "../types/app/actions";
import { AppState, rootReducer, initialState } from "./reducers/index";

const middlewares = [thunk as ThunkMiddleware<AppState, AppAction>];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
