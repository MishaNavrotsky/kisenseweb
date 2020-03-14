import React from "react";
import { Paper, Typography } from "@material-ui/core";
class ApplicationDetails extends React.Component {
  render() {
    const { details } = this.props;
    console.log(details);
    return (
      <div>
        <Paper>
          <Typography>{details.name}</Typography>
        </Paper>
      </div>
    );
  }
}

export default ApplicationDetails;
