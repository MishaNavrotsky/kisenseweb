import React from "react";
import { connect } from "react-redux";
import { withStyles, Paper, Typography } from "@material-ui/core";

const classes = theme => ({
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 64px)"
  }
});

class Profile extends React.Component {
  render() {
    const { classes, user } = this.props;
    console.log(user);
    return (
      <div className={classes.center}>
        <Paper style={{ padding: 40 }} elevation={2}>
          <Typography>Login: {user.name}</Typography>
          <Typography>Role: {user.role}</Typography>
          <Typography>
            Register date: {new Date(user.createDate).toString()}
          </Typography>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.api.user || {},
    loadingScreen: state.api.loadingScreen || false
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(classes)(Profile));
