import { Todo } from "../../types/todo/bar";
import {
  TodoActionTypes,
  AddTodoAction,
  RemoveTodoAction,
  EditTodoAction,
  ToggleTodoAction
} from "../../types/todo/actions";
import { Dispatch } from "redux";
import { AppState } from "../reducers/index";
import { AppAction } from "../../types/app/actions";

/*
 * In order to automatically generate id for our todos
 */

let nextId = 0;

// action creators
export const addTodo = (todo: Todo): AddTodoAction => ({
  type: TodoActionTypes.ADD_TODO,
  todo
});

export const removeTodo = (id: number): RemoveTodoAction => ({
  type: TodoActionTypes.REMOVE_TODO,
  id
});

export const editTodo = (todo: Todo): EditTodoAction => ({
  type: TodoActionTypes.EDIT_TODO,
  todo
});

export const toggleTodo = (todo: Todo): ToggleTodoAction => ({
  type: TodoActionTypes.TOGGLE_TODO,
  todo
});

export const startAddingTodo = (description: string) => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    const newTodo = {
      id: nextId++,
      description: description,
      isDone: false
    };
    dispatch(addTodo(newTodo));
  };
};

export const startRemovingTodo = (id: number) => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    dispatch(removeTodo(id));
  };
};

export const startEditingTodo = (todo: Todo) => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    dispatch(editTodo(todo));
  };
};

export const startTogglingTodo = (todo: Todo) => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    const toggledTodo = { ...todo, isDone: !todo.isDone };
    dispatch(toggleTodo(toggledTodo));
  };
};
