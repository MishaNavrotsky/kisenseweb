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
    display: "flex",
    maxWidth: 300
  },
  img: {
    height: "auto",
    width: "100%",
    margin: "auto"
  }
});

function Row({ className, children, itemsClassName }) {
  return (
    <div className={className}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { className: itemsClassName })
      )}
    </div>
  );
}

function Item({ className, children }) {
  return <div className={className}>{children}</div>;
}

class RecepiesMenu extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Row className={classes.row} itemsClassName={classes.item}>
          <Item>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </Item>
          <Item>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </Item>
          <Item>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </Item>
          <Item>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </Item>
        </Row>
        <Row className={classes.row} itemsClassName={classes.item}>
          <Item>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </Item>
          <Item>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </Item>
          <Item>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </Item>
          <Item>
            <img
              className={classes.img}
              alt="err"
              src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
            ></img>
          </Item>
        </Row>
      </div>
    );
  }
}

export default withStyles(classes)(RecepiesMenu);
