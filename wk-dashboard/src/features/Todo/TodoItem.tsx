import React, { MouseEvent, SFC } from "react";

import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  WithStyles,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import { Todo } from "../../types/todo/bar";

const styles = () => createStyles({});

interface Props extends WithStyles<typeof styles> {
  todo: Todo;
  onTodoRemoving: (id: number) => void;
  onTodoEditing: (todo: Todo) => void;
  onTodoToggling: (todo: Todo) => void;
}

const TodoItem: SFC<Props> = ({
  todo,
  onTodoRemoving,
  onTodoEditing,
  onTodoToggling
}) => (
  <ListItem divider={true}>
    <Checkbox
      onClick={() => onTodoToggling(todo)}
      checked={todo.isDone}
      disableRipple
    />
    <ListItemText primary={todo.description} />
    <ListItemSecondaryAction>
      <IconButton
        aria-label="Delete Todo"
        onClick={() => onTodoRemoving(todo.id)}
      >
        <DeleteOutlined />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default withStyles(styles)(TodoItem);
