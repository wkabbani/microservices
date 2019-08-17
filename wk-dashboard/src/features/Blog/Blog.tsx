import React, { Component } from "react";
import { connect } from "react-redux";
import BlogList from "./BlogList";
// import AddBlogForm from "./AddBlogForm";
import {
  startAddingBlog,
  startEditingBlog,
  startRemovingBlog,
  startSettingBlogs
} from "../../redux/actions/blog";
import { Blog } from "../../types/blog/Blog";
import { AppState } from "../../redux/reducers/index";
import { ThunkDispatch } from "redux-thunk";
import { AppAction } from "../../types/app/actions";
import { bindActionCreators } from "redux";
import { getBlogs } from "../../redux/selectors/blogs";

interface BlogPageProps {}

interface BlogPageState {}

type Props = BlogPageProps & LinkStateProps & LinkDispatchProps;

class BlogPage extends Component<Props, BlogPageState> {
  componentDidMount() {
    this.props.startSettingBlogs();
  }

  render() {
    return (
      <div>
        <BlogList
          blogs={this.props.blogs}
          onBlogEditing={this.props.startEditingBlog}
          onBlogRemoving={this.props.startRemovingBlog}
        />
      </div>
    );
  }
}

interface LinkStateProps {
  blogs: Blog[];
}
interface LinkDispatchProps {
  startAddingBlog: (blog: Blog) => void;
  startRemovingBlog: (id: string) => void;
  startEditingBlog: (blog: Blog) => void;
  startSettingBlogs: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: BlogPageProps
): LinkStateProps => ({
  blogs: getBlogs(state)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppAction>,
  ownProps: BlogPageProps
): LinkDispatchProps => ({
  startAddingBlog: bindActionCreators(startAddingBlog, dispatch),
  startRemovingBlog: bindActionCreators(startRemovingBlog, dispatch),
  startEditingBlog: bindActionCreators(startEditingBlog, dispatch),
  startSettingBlogs: bindActionCreators(startSettingBlogs, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPage);
