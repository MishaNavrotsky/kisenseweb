import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  InputBase,
  withStyles,
  fade
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { Person, Search } from "@material-ui/icons";

const classes = theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  personIcon: {
    cursor: "pointer"
  }
});
class AppHeader extends React.Component {
  static defaultProps = {
    user: {}
  };
  handleLogin = () => {
    this.props.history.push("/login");
  };
  handleRegister = () => {
    this.props.history.push("/register");
  };
  handleUsers = () => {
    this.props.history.push("/users");
  };
  handleIndex = () => {
    this.props.history.push("/");
  };
  handleProfile = () => {
    this.props.history.push("/profile");
  };
  handleApplications = () => {
    this.props.history.push("/applications");
  };

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="sticky">
        <Toolbar>
          <Button onClick={this.handleLogin}>Login</Button>
          <Button onClick={this.handleRegister}>Register</Button>
          <Button onClick={this.handleUsers}>Users</Button>
          <Button onClick={this.handleApplications}>Applications</Button>
          <Button onClick={this.handleIndex}>Index</Button>
          {this.props.user.name ? (
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center"
              }}
            >
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Search />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <Typography style={{ height: "100%", marginRight: 10 }}>
                {this.props.user.name}
              </Typography>
              <Person
                onClick={this.handleProfile}
                className={classes.personIcon}
              />
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(classes)(withRouter(AppHeader));
