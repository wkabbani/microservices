import React, { MouseEvent, SFC } from "react";

import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  WithStyles,
  ListItemSecondaryAction,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Hidden,
  CardMedia
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import { Blog } from "../../types/blog/Blog";

const styles = () =>
  createStyles({
    card: {
      display: "flex"
    },
    cardDetails: {
      flex: 1
    },
    cardMedia: {
      width: 160
    }
  });

interface Props extends WithStyles<typeof styles> {
  blog: Blog;
  onBlogRemoving: (id: string) => void;
  onBlogEditing: (blog: Blog) => void;
}

const BlogCard: SFC<Props> = ({
  blog,
  onBlogRemoving,
  onBlogEditing,
  classes
}) => (
  <CardActionArea component="a" href="#">
    <Card className={classes.card}>
      <div className={classes.cardDetails}>
        <CardContent>
          <Typography component="h2" variant="h5">
            {blog.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {new Date().getDate()}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {blog.text}
          </Typography>
        </CardContent>
      </div>
      <Hidden xsDown>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
      </Hidden>
    </Card>
  </CardActionArea>
);

export default withStyles(styles)(BlogCard);
