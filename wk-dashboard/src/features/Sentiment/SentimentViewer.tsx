import React, { SFC } from "react";

import { WithStyles, Typography, Paper, Theme } from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import { Sentiment } from "../../types/sentiment/Sentiment";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 16,
      marginTop: 30,
      padding: 16
    }
  });

interface Props extends WithStyles<typeof styles> {
  sentiment: Sentiment;
}

const SentimentViewer: SFC<Props> = ({ sentiment, classes }) => (
  <Paper className={classes.root}>
    <Typography variant="h5" component="h3">
      {sentiment.sentence}
    </Typography>
    {sentiment.polarity !== 0 && (
      <Typography variant="h4" component="h3">
        {sentiment.polarity}
      </Typography>
    )}
  </Paper>
);

export default withStyles(styles)(SentimentViewer);
