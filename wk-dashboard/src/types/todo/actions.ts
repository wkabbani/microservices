import { Todo } from "./bar";

// 1. Define todo action types
export enum TodoActionTypes {
  ADD_TODO = "ADD_TODO",
  EDIT_TODO = "EDIT_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  SET_TODOS = "SET_TODOS"
}

// 2. Define return types of todo actions
export interface ToggleTodoAction {
  type: TodoActionTypes.TOGGLE_TODO;
  todo: Todo;
}

export interface EditTodoAction {
  type: TodoActionTypes.EDIT_TODO;
  todo: Todo;
}

export interface RemoveTodoAction {
  type: TodoActionTypes.REMOVE_TODO;
  id: number;
}

export interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO;
  todo: Todo;
}

export interface SetTodosAction {
  type: TodoActionTypes.SET_TODOS;
  todos: Todo[];
}

// 3. Define Aggregate todo actions
export type TodoAction =
  | ToggleTodoAction
  | EditTodoAction
  | RemoveTodoAction
  | AddTodoAction
  | SetTodosAction;
