import { combineReducers } from "redux";
import * as fromTodo from "./todo";

/*
 * This is the root state of the app
 * It contains every substate of the app
 */
export interface AppState {
  todos: fromTodo.State;
}

/*
 * initialState of the app
 */
export const initialState: AppState = {
  todos: fromTodo.initialState
};

/*
 * Root reducer of the app
 * Returned reducer will be of type Reducer<State>
 */
export const rootReducer = combineReducers<AppState>({
  todos: fromTodo.reducer
});
