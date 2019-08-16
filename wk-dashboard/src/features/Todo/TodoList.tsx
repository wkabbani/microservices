import React, { SFC } from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";

import { WithStyles, Paper, List } from "@material-ui/core";
import TodoItem from "./TodoItem";
import { Todo } from "../../types/todo/bar";

const styles = () => createStyles({});

interface Props extends WithStyles<typeof styles> {
  todos: Todo[];
  onTodoRemoving: (id: number) => void;
  onTodoEditing: (todo: Todo) => void;
  onTodoToggling: (todo: Todo) => void;
}

const TodoList: SFC<Props> = ({
  todos,
  onTodoRemoving,
  onTodoEditing,
  onTodoToggling
}) =>
  todos.length > 0 ? (
    <Paper style={{ margin: 16 }}>
      <List style={{ overflow: "scroll" }}>
        {todos.map((todo, idx) => (
          <TodoItem
            key={idx}
            todo={todo}
            onTodoRemoving={onTodoRemoving}
            onTodoEditing={onTodoEditing}
            onTodoToggling={onTodoToggling}
          />
        ))}
      </List>
    </Paper>
  ) : null;

export default withStyles(styles)(TodoList);
