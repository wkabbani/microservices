import React, { SFC } from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";

import { WithStyles, Paper, List } from "@material-ui/core";
import BlogCard from "./BlogCard";
import { Blog } from "../../types/blog/Blog";

const styles = () => createStyles({});

interface Props extends WithStyles<typeof styles> {
  blogs: Blog[];
  onBlogRemoving: (id: string) => void;
  onBlogEditing: (blog: Blog) => void;
}

const BlogList: SFC<Props> = ({ blogs, onBlogRemoving, onBlogEditing }) =>
  blogs.length > 0 ? (
    <Paper style={{ margin: 16 }}>
      <List style={{ overflow: "scroll" }}>
        {blogs.map((blog, idx) => (
          <BlogCard
            key={idx}
            blog={blog}
            onBlogRemoving={onBlogRemoving}
            onBlogEditing={onBlogEditing}
          />
        ))}
      </List>
    </Paper>
  ) : null;

export default withStyles(styles)(BlogList);
