import { AppState } from "../reducers";
import { createSelector } from "reselect";

/*
 * Get the sentiment state from the root state
 */
const getSentimentState = (state: AppState) => state.sentiment;

/*
 * Getting sentiment from sentiment State
 */
export const getSentiment = createSelector(
  [getSentimentState],
  s => s.sentiment
);
