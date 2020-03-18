import React from "react";
import { withStyles } from "@material-ui/core";
import RecepiesMenu from "./RecepiesMenu";

const classes = theme => ({});

class RecepiesPage extends React.Component {
  render() {
    return (
      <div>
        <RecepiesMenu></RecepiesMenu>
      </div>
    );
  }
}

export default withStyles(classes)(RecepiesPage);
