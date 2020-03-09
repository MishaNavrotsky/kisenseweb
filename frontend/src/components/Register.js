import React from "react"
import { Input, Typography, Button } from "@material-ui/core"
import { createUser } from "../api/index"
import { withSnackbar } from "notistack"
class Register extends React.Component {
    handleSend = async ()=>{
        const requestBody = { 
            username: document.getElementById("login").value,
            password: document.getElementById("password").value,
            email: document.getElementById("email").value
        }
        const res = await createUser(JSON.stringify(requestBody))
        console.log(res);
        if(res.status === 'ok') {
            this.props.enqueueSnackbar("Registered", { 
                variant: 'success',
            });
        } else {
            this.props.enqueueSnackbar(res.messages.map(str=>str[str.length-1]==='.' ? str : str + ".").join(' '), { 
                variant: 'error',
            });
        }
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

export default withSnackbar(Register)