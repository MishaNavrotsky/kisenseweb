import React from "react"
import { Input, Typography, Button } from "@material-ui/core"
import {login } from "../api/index"

export default class Login extends React.Component {
    async handleSend(){
        const requestBody = { 
            username: document.getElementById("login").value,
            password: document.getElementById("password").value,
        }
        const obj = await login(JSON.stringify(requestBody))
        document.cookie = "token=" + obj.token;
        
    }
    render(){
        return(
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