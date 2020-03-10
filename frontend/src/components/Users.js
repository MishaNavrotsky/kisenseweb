import React from "react";
import { Paper, Button, Typography, Grid } from "@material-ui/core";
import { BatteryLoading } from "react-loadingg";
import { withSnackbar } from "notistack";

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
          <BatteryLoading></BatteryLoading>
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
