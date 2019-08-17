import * as React from "react";
import { FormEvent } from "react";
import { Paper, Grid, TextField, Button } from "@material-ui/core";

interface Props {
  handleSubmit: (value: string) => void;
}
interface State {
  value: string;
}

class SentimentForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: "" }; // Value is empty by default
    this._updateValue = this._updateValue.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _updateValue(value: string) {
    this.setState({ value });
  }

  _handleSubmit(e: FormEvent<any>) {
    e.preventDefault();
    if (!this.state.value.trim()) {
      return;
    }

    this.props.handleSubmit(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    const { value } = this.state;
    const { _updateValue, _handleSubmit } = this;
    return (
      <Paper style={{ margin: 16, padding: 16 }}>
        <Grid container>
          <Grid xs={10} md={12} item style={{ paddingRight: 16 }}>
            <TextField
              placeholder="Enter sentence here"
              value={value}
              onChange={e => _updateValue(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid
            xs={2}
            md={3}
            item
            style={{ marginTop: 20, marginRight: "auto", marginLeft: "auto" }}
          >
            <Button
              fullWidth
              color="primary"
              variant="contained"
              onClick={_handleSubmit}
            >
              Check Sentiment
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default SentimentForm;
