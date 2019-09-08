import { Blog } from "../../types/blog/Blog";
import {
  BlogActionTypes,
  AddBlogAction,
  EditBlogAction,
  RemoveBlogAction,
  SetBlogsAction
} from "../../types/blog/actions";
import { Dispatch } from "redux";
import { AppState } from "../reducers/index";
import { AppAction } from "../../types/app/actions";
import axios from "axios";

// action creators
export const addBlog = (blog: Blog): AddBlogAction => ({
  type: BlogActionTypes.ADD_BLOG,
  blog
});

export const removeBlog = (id: string): RemoveBlogAction => ({
  type: BlogActionTypes.REMOVE_BLOG,
  id
});

export const editBlog = (blog: Blog): EditBlogAction => ({
  type: BlogActionTypes.EDIT_BLOG,
  blog
});

export const setBlogs = (blogs: Blog[]): SetBlogsAction => ({
  type: BlogActionTypes.SET_BLOGS,
  blogs
});

export const startAddingBlog = (blog: Blog) => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    axios
      .post(`${process.env.REACT_APP_BLOG_SVC_URL}/api/v1/blogs`, blog)
      .then(response => {
        dispatch(addBlog(response.data));
      })
      .catch(error => console.log(error));
  };
};

export const startRemovingBlog = (id: string) => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    axios
      .delete(`${process.env.REACT_APP_BLOG_SVC_URL}/api/v1/blogs/${id}`)
      .then(response => {
        dispatch(removeBlog(id));
      })
      .catch(error => console.log(error));
  };
};

export const startEditingBlog = (blog: Blog) => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    axios
      .put(
        `${process.env.REACT_APP_BLOG_SVC_URL}/api/v1/blogs/${blog.blogId}`,
        blog
      )
      .then(response => {
        dispatch(editBlog(blog));
      })
      .catch(error => console.log(error));
  };
};

export const startSettingBlogs = () => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    axios
      .get(`${process.env.REACT_APP_BLOG_SVC_URL}/api/v1/blogs`)
      .then(response => {
        dispatch(setBlogs(response.data));
      })
      .catch(error => console.log(error));
  };
};
