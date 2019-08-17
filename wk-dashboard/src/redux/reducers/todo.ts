import { Todo } from "../../types/todo/bar";
import { TodoAction, TodoActionTypes } from "../../types/todo/actions";

// Define state type for the current reducer
export interface State {
  todos: Todo[];
}

// Define initial state for the current reducer
export const initialState: State = {
  todos: []
};

// Define the todos reducer
export const reducer = (
  state: State = initialState,
  action: TodoAction
): State => {
  switch (action.type) {
    case TodoActionTypes.SET_TODOS:
      return { ...state, todos: action.todos };
    case TodoActionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.todo] };
    case TodoActionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.id)
      };
    case TodoActionTypes.EDIT_TODO:
    case TodoActionTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.todo.id) {
            return action.todo;
          } else {
            return todo;
          }
        })
      };
    default:
      return state;
  }
};
