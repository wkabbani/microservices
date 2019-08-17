import { Blog } from "../../types/blog/Blog";
import { BlogAction, BlogActionTypes } from "../../types/blog/actions";

// Define state type for the current reducer
export interface State {
  blogs: Blog[];
}

// Define initial state for the current reducer
export const initialState: State = {
  blogs: []
};

// Define the blogs reducer
export const reducer = (
  state: State = initialState,
  action: BlogAction
): State => {
  switch (action.type) {
    case BlogActionTypes.SET_BLOGS:
      return { ...state, blogs: action.blogs };
    case BlogActionTypes.ADD_BLOG:
      return { ...state, blogs: [...state.blogs, action.blog] };
    case BlogActionTypes.REMOVE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter(({ blogId }) => blogId !== action.id)
      };
    case BlogActionTypes.EDIT_BLOG:
      return {
        ...state,
        blogs: state.blogs.map(blog => {
          if (blog.blogId === action.blog.blogId) {
            return action.blog;
          } else {
            return blog;
          }
        })
      };
    default:
      return state;
  }
};
