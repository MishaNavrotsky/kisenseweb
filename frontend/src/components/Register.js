import React from "react";
import {
  Input,
  Typography,
  Button,
  withStyles,
  Paper
} from "@material-ui/core";
import { createUser } from "../api/index";
import { withSnackbar } from "notistack";
import { withRouter } from "react-router-dom";

const classes = theme => ({
  register: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 64px)"
  },
  row: {
    marginTop: 16
  }
});
class Register extends React.Component {
  state = {};
  onKeyDown = event => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.handleSend();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  handleSend = async () => {
    const requestBody = {
      name: document.getElementById("login")?.value,
      password: document.getElementById("password")?.value,
      email: document.getElementById("email")?.value
    };
    this.props.showLoadingScreen(true);
    const res = await createUser(JSON.stringify(requestBody));
    this.props.showLoadingScreen(false);
    if (res.status === "ok") {
      this.props.enqueueSnackbar("Registered", {
        variant: "success"
      });
      console.log(res);
      this.props.setUser(res.user);
      this.props.history.push("/");
    } else {
      this.props.enqueueSnackbar(
        res.messages
          ?.map(str => (str[str.length - 1] === "." ? str : str + "."))
          .join(" ") || res.status,
        {
          variant: "error"
        }
      );
    }
  };

  render() {
    return (
      <div className={this.props.classes.register}>
        <Paper style={{ padding: 40 }} elevation={2}>
          <div>
            <Typography>Login:</Typography>
            <Input type="login" id="login"></Input>
          </div>
          <div className={this.props.classes.row}>
            <Typography>Password:</Typography>
            <Input type="password" id="password"></Input>
          </div>
          <div className={this.props.classes.row}>
            <Typography>Email:</Typography>
            <Input type="email" id="email"></Input>
          </div>
          <Button
            onKeyDown={this.onKeyDown}
            variant="contained"
            onClick={this.handleSend}
            style={{ width: 195, marginTop: 16 }}
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </Paper>
      </div>
    );
  }
}

export default withStyles(classes)(withRouter(withSnackbar(Register)));
