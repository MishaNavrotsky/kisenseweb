import React from "react"
import { getUsers } from "../api/index"
import { Paper } from "@material-ui/core"

export default class Test extends React.Component {
    state = {
        data: []
    }
    async componentDidMount() {
        this.setState({data:await (await getUsers()).split('\n')})
    }

    render() {
        return (
        <div>
            {this.state.data.map((str, id)=>(<Paper key={id}>{str}</Paper>))}
        </div>);
    }
}