import { Sentiment } from "../../types/sentiment/Sentiment";
import {
  SentimentAction,
  SentimentActionTypes
} from "../../types/sentiment/actions";

// Define state type for the current reducer
export interface State {
  sentiment: Sentiment;
}

// Define initial state for the current reducer
export const initialState: State = {
  sentiment: {
    sentence: "",
    polarity: 0
  }
};

// Define the todos reducer
export const reducer = (
  state: State = initialState,
  action: SentimentAction
): State => {
  switch (action.type) {
    case SentimentActionTypes.SET_SENTIMENT:
      return { ...state, sentiment: { ...action.sentiment } };
    default:
      return state;
  }
};
