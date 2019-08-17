import { Blog } from "./Blog";

// 1. Define blog action types
export enum BlogActionTypes {
  ADD_BLOG = "ADD_BLOG",
  EDIT_BLOG = "EDIT_BLOG",
  REMOVE_BLOG = "REMOVE_BLOG",
  SET_BLOGS = "SET_BLOGS"
}

// 2. Define return types of blog actions

export interface EditBlogAction {
  type: BlogActionTypes.EDIT_BLOG;
  blog: Blog;
}

export interface RemoveBlogAction {
  type: BlogActionTypes.REMOVE_BLOG;
  id: string;
}

export interface AddBlogAction {
  type: BlogActionTypes.ADD_BLOG;
  blog: Blog;
}

export interface SetBlogsAction {
  type: BlogActionTypes.SET_BLOGS;
  blogs: Blog[];
}

// 3. Define Aggregate blog actions
export type BlogAction =
  | EditBlogAction
  | RemoveBlogAction
  | AddBlogAction
  | SetBlogsAction;
