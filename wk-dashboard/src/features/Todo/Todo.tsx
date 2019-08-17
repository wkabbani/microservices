import React, { Component } from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import {
  startAddingTodo,
  startEditingTodo,
  startRemovingTodo,
  startTogglingTodo,
  startSettingTodos
} from "../../redux/actions/todo";
import { Todo } from "../../types/todo/bar";
import { AppState } from "../../redux/reducers/index";
import { ThunkDispatch } from "redux-thunk";
import { AppAction } from "../../types/app/actions";
import { bindActionCreators } from "redux";
import { getTodos } from "../../redux/selectors/todos";

interface TodoPageProps {}

interface TodoPageState {}

type Props = TodoPageProps & LinkStateProps & LinkDispatchProps;

class TodoPage extends Component<Props, TodoPageState> {
  componentDidMount() {
    this.props.startSettingTodos();
  }

  render() {
    return (
      <div>
        <AddTodoForm handleSubmit={this.props.startAddingTodo} />
        <TodoList
          todos={this.props.todos}
          onTodoEditing={this.props.startEditingTodo}
          onTodoRemoving={this.props.startRemovingTodo}
          onTodoToggling={this.props.startTogglingTodo}
        />
      </div>
    );
  }
}

interface LinkStateProps {
  todos: Todo[];
}
interface LinkDispatchProps {
  startAddingTodo: (description: string) => void;
  startRemovingTodo: (id: number) => void;
  startEditingTodo: (todo: Todo) => void;
  startTogglingTodo: (todo: Todo) => void;
  startSettingTodos: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: TodoPageProps
): LinkStateProps => ({
  todos: getTodos(state)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppAction>,
  ownProps: TodoPageProps
): LinkDispatchProps => ({
  startAddingTodo: bindActionCreators(startAddingTodo, dispatch),
  startRemovingTodo: bindActionCreators(startRemovingTodo, dispatch),
  startEditingTodo: bindActionCreators(startEditingTodo, dispatch),
  startTogglingTodo: bindActionCreators(startTogglingTodo, dispatch),
  startSettingTodos: bindActionCreators(startSettingTodos, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoPage);
