import { Sentiment } from "../../types/sentiment/Sentiment";
import {
  SentimentActionTypes,
  SetSentimentAction
} from "../../types/sentiment/actions";
import { Dispatch } from "redux";
import { AppState } from "../reducers/index";
import { AppAction } from "../../types/app/actions";
import axios from "axios";

// action creators
export const setSentiment = (sentiment: Sentiment): SetSentimentAction => ({
  type: SentimentActionTypes.SET_SENTIMENT,
  sentiment
});

export const startSettingSentiment = (sentence: string) => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    const request = {
      sentence: sentence
    };
    axios
      .post("http://localhost:32769/api/v1/sentiment", request)
      .then(response => {
        dispatch(setSentiment(response.data));
      })
      .catch(error => console.log(error));
  };
};
