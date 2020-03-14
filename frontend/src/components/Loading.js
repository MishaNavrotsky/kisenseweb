import React from "react";
import { BoxLoading } from "react-loadingg";
import { Backdrop, withStyles } from "@material-ui/core";
const classes = theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
});
class Loading extends React.Component {
  render() {
    const { open, classes } = this.props;
    return (
      <Backdrop open={open} className={classes.backdrop}>
        <BoxLoading color="#2196f3" />
      </Backdrop>
    );
  }
}

export default withStyles(classes)(Loading);
