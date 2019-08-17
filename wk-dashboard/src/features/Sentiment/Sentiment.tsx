import React, { Component } from "react";
import { connect } from "react-redux";
import SentimentForm from "./SentimentForm";
import SentimentViewer from "./SentimentViewer";
import { startSettingSentiment } from "../../redux/actions/sentiment";
import { Sentiment } from "../../types/sentiment/Sentiment";
import { AppState } from "../../redux/reducers/index";
import { ThunkDispatch } from "redux-thunk";
import { AppAction } from "../../types/app/actions";
import { bindActionCreators } from "redux";
import { getSentiment } from "../../redux/selectors/sentiment";

interface SentimentPageProps {}

interface SentimentPageState {}

type Props = SentimentPageProps & LinkStateProps & LinkDispatchProps;

class SentimentPage extends Component<Props, SentimentPageState> {
  render() {
    return (
      <div>
        <SentimentForm handleSubmit={this.props.startSettingSentiment} />
        <SentimentViewer sentiment={this.props.sentiment} />
      </div>
    );
  }
}

interface LinkStateProps {
  sentiment: Sentiment;
}
interface LinkDispatchProps {
  startSettingSentiment: (sentence: string) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: SentimentPageProps
): LinkStateProps => ({
  sentiment: getSentiment(state)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppAction>,
  ownProps: SentimentPageProps
): LinkDispatchProps => ({
  startSettingSentiment: bindActionCreators(startSettingSentiment, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SentimentPage);
