import { combineReducers } from "redux";
import * as fromTodo from "./todo";
import * as fromBlog from "./blog";

/*
 * This is the root state of the app
 * It contains every substate of the app
 */
export interface AppState {
  todos: fromTodo.State;
  blogs: fromBlog.State;
}

/*
 * initialState of the app
 */
export const initialState: AppState = {
  todos: fromTodo.initialState,
  blogs: fromBlog.initialState
};

/*
 * Root reducer of the app
 * Returned reducer will be of type Reducer<State>
 */
export const rootReducer = combineReducers<AppState>({
  todos: fromTodo.reducer,
  blogs: fromBlog.reducer
});
