import { AppState } from "../reducers";
import { createSelector } from "reselect";

/*
 * Get the blogs state from the root state
 */
const getBlogsState = (state: AppState) => state.blogs;

/*
 * Getting blogs array from blogs State
 */
export const getBlogs = createSelector(
  [getBlogsState],
  s => s.blogs
);
