import React from "react";
import { withStyles } from "@material-ui/core";

const classes = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "10%",
    marginRight: "10%"
  },
  row: {
    display: "flex",
    margin: "1%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  item: {
    width: "100%",
    // minWidth: 200,
    marginLeft: "1%",
    marginRight: "1%",
    display: "flex"
  },
  img: {
    height: "auto",
    width: "100%",
    margin: "auto"
  }
});

class MainMenu extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.row}>
          <div className={classes.item}>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </div>
          <div className={classes.item}>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </div>
          <div className={classes.item}>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.item}>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </div>
          <div className={classes.item}>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </div>
          <div className={classes.item}>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.item}>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </div>
          <div className={classes.item}>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </div>
          <div className={classes.item}>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(classes)(MainMenu);
