import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { withSnackbar } from "notistack";
import Loading from "./Loading";
import { getUsers } from "../api";
class Test extends React.Component {
  state = {
    loading: true,
    loadData: null
  };

  async componentDidMount() {
    this.setState({ loading: false, loadData: await getUsers() });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Loading />
        ) : (
          <Grid container justify="center">
            {this.state.loadData.map(json => (
              <Typography>{JSON.stringify(json)}</Typography>
            ))}
          </Grid>
        )}
      </div>
    );
  }
}

export default withSnackbar(Test);
