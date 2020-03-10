import React from "react";
import { Input, Typography, Button } from "@material-ui/core";
import { login } from "../api/index";
import { withSnackbar } from "notistack";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  state = {
    loginStatus: "Waiting for login..."
  };

  handleSend = async () => {
    const requestBody = {
      name: document.getElementById("login").value,
      password: document.getElementById("password").value
    };
    const res = await login(JSON.stringify(requestBody));
    if (res.status === "ok") {
      this.props.enqueueSnackbar("Logged in", {
        variant: "success"
      });
      this.props.setUser(res.user);
      this.props.history.push("/");
    } else {
      this.props.enqueueSnackbar(res.message, {
        variant: "error"
      });
    }
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <Typography>Login:</Typography>
        <Input type="login" id="login"></Input>
        <Typography>Password:</Typography>
        <Input type="password" id="password"></Input>
        <Button onClick={this.handleSend}>Send</Button>
      </div>
    );
  }
}

export default withRouter(withSnackbar(Login));
