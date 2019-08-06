import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const initialState = {};

const middlewares = [thunk];

const reducers = combineReducers({});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middlewares)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
