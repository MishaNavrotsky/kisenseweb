import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { Person } from "@material-ui/icons";
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

  render() {
    return (
      <AppBar position="sticky">
        <Toolbar>
          <Button onClick={this.handleLogin}>Login</Button>
          <Button onClick={this.handleRegister}>Register</Button>
          <Button onClick={this.handleUsers}>Users</Button>
          <Button onClick={this.handleIndex}>Index</Button>
          {this.props.user.name ? (
            <div style={{ marginLeft: "auto", display: "flex" }}>
              <Typography style={{ marginRight: 10 }}>
                {this.props.user.name}
              </Typography>
              <Person />
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(AppHeader);
