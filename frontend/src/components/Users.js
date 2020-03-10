import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { withSnackbar } from "notistack";
import Loading from "./Loading";
class Test extends React.Component {
  state = {
    data: [],
    i: 0,
    loading: true,
    loadData: null
  };
  async componentDidMount() {}

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Loading />
        ) : (
          <Grid container justify="center">
            <Typography>123</Typography>
          </Grid>
        )}
      </div>
    );
  }
}

export default withSnackbar(Test);
