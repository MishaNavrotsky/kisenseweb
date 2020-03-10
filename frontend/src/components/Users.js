import React from "react";
import { getUsers, someData } from "../api/index";
import { Paper, Button, Typography, Grid } from "@material-ui/core";
import { BatteryLoading } from "react-loadingg";
import { withSnackbar } from "notistack";

class Test extends React.Component {
  state = {
    data: [],
    i: 0,
    loading: false,
    loadData: null
  };
  async componentDidMount() {
    setInterval(() => {
      this.setState({ i: this.state.i + 1 });
    }, 10);

    const promise = someData();
    this.setState({ loading: true });
    this.props.enqueueSnackbar("Loading", {
      variant: "warning"
    });
    const data = (await promise).data;
    this.props.enqueueSnackbar("Loaded", {
      variant: "info"
    });
    this.setState({ loading: false, loadData: data });
  }

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
