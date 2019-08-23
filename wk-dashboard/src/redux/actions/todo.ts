import { Todo } from "../../types/todo/bar";
import {
  TodoActionTypes,
  AddTodoAction,
  RemoveTodoAction,
  EditTodoAction,
  ToggleTodoAction,
  SetTodosAction
} from "../../types/todo/actions";
import { Dispatch } from "redux";
import { AppState } from "../reducers/index";
import { AppAction } from "../../types/app/actions";
import axios from "axios";

/*
 * In order to automatically generate id for our todos
 */

let nextId = 1;

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

export const setTodos = (todos: Todo[]): SetTodosAction => ({
  type: TodoActionTypes.SET_TODOS,
  todos
});

export const startAddingTodo = (description: string) => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    const newTodo = {
      id: nextId++,
      description: description,
      isDone: false
    };
    axios
      .post("http://wk-todos-svc/api/v1/todos", newTodo)
      .then(response => {
        dispatch(addTodo(newTodo));
      })
      .catch(error => console.log(error));
  };
};

export const startRemovingTodo = (id: number) => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    axios
      .delete(`http://wk-todos-svc/api/v1/todos/${id}`)
      .then(response => {
        dispatch(removeTodo(id));
      })
      .catch(error => console.log(error));
  };
};

export const startEditingTodo = (todo: Todo) => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    axios
      .put(`http://wk-todos-svc/api/v1/todos/${todo.id}`, todo)
      .then(response => {
        dispatch(editTodo(todo));
      })
      .catch(error => console.log(error));
  };
};

export const startTogglingTodo = (todo: Todo) => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    const toggledTodo = { ...todo, isDone: !todo.isDone };
    axios
      .put(`http://wk-todos-svc/api/v1/todos/${todo.id}`, toggledTodo)
      .then(response => {
        dispatch(toggleTodo(toggledTodo));
      })
      .catch(error => console.log(error));
  };
};

export const startSettingTodos = () => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    axios
      .get("http://wk-todos-svc/api/v1/todos")
      .then(response => {
        dispatch(setTodos(response.data));
      })
      .catch(error => console.log(error));
  };
};
