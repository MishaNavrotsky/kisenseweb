import React from "react";
import { withStyles } from "@material-ui/core";

const classes = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    // alignItems: "center",
    justifyContent: "center"
  },
  item: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    display: "flex"
  },
  img: {
    margin: "auto",
    transition: theme.transitions.create('width'),
    "@media ( max-width: 700px)": {
        width: 200,
    },
    "@media ( min-width: 701px)": {
        width: 250,
    }
  },
  itemGroup: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "space-between"
  }
});

class RecepiesMenu extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.row}>
          <div className={classes.itemGroup}>
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
          <div className={classes.itemGroup}>
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
        <div className={classes.row}>
          <div className={classes.itemGroup}>
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
          <div className={classes.itemGroup}>
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
      </div>
    );
  }
}

export default withStyles(classes)(RecepiesMenu);
