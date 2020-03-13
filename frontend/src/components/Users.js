import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { withSnackbar } from "notistack";
import { getUsers } from "../api";
class Test extends React.Component {
  state = {
    loadData: null
  };

  async componentDidMount() {
    this.props.showLoadingScreen(true);
    const res = await getUsers();
    if (res.status === "error") {
      this.props.showLoadingScreen(false);
      this.props.enqueueSnackbar("loading error", { variant: "error" });
    } else {
      this.props.showLoadingScreen(false);
      this.setState({ loadData: res });
    }
  }

  render() {
    return (
      <div>
        <Grid container justify="center">
          {this.state.loadData?.map((json, id) => (
            <Typography key={id}>{JSON.stringify(json)}</Typography>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withSnackbar(Test);
