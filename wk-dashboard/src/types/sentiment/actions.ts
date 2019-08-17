import { Sentiment } from "./Sentiment";

// 1. Define sentiment action types
export enum SentimentActionTypes {
  SET_SENTIMENT = "SET_SENTIMENT"
}

// 2. Define return types of sentiment actions
export interface SetSentimentAction {
  type: SentimentActionTypes.SET_SENTIMENT;
  sentiment: Sentiment;
}

// 3. Define Aggregate sentiment actions
export type SentimentAction = SetSentimentAction;
