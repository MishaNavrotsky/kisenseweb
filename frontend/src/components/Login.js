import React from "react"
import { Input, Typography, Button } from "@material-ui/core"
import { login } from "../api/index"
import { withSnackbar } from 'notistack';

class Login extends React.Component {
    state = {
        loginStatus: "Waiting for login..."
    }
    handleSend = async () => {
        const requestBody = {
            username: document.getElementById("login").value,
            password: document.getElementById("password").value,
        }
        const res = await login(JSON.stringify(requestBody))
        if(res.status === 'ok') {
            this.props.enqueueSnackbar("Logged in", { 
                variant: 'success',
            });
            this.props.history.push("/users")
        } else {
            this.props.enqueueSnackbar(res.message, { 
                variant: 'error',
            });
        }
    }
    render() {
        return (
            <div>
                <Typography>Login:</Typography>
                <Input type="login" id="login"></Input>
                <Typography>Password:</Typography>
                <Input type="password" id="password"></Input>
                <Button onClick={this.handleSend}>Send</Button>
            </div>
        )
    }
}

export default withSnackbar(Login);