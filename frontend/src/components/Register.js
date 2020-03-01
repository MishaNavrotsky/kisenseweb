import React from "react"
import { Input, Typography, Button } from "@material-ui/core"
import { createUser } from "../api/index"

export default class Register extends React.Component {
    async handleSend(){
        const requestBody = { 
            login: document.getElementById("login").value,
            password: document.getElementById("password").value,
            email: document.getElementById("email").value
        }
        await createUser(JSON.stringify(requestBody))
    }
    render(){
        return(
            <div>
                <Typography>Login:</Typography>
                <Input type="login" id="login"></Input>
                <Typography>Password:</Typography>
                <Input type="password" id="password"></Input>
                <Typography>Email:</Typography>
                <Input type="email" id="email"></Input>
                <Button onClick={this.handleSend}>Send</Button>
            </div>
        )
    }
}