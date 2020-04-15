import React from "react";
import { withStyles } from "@material-ui/core";

const classes = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "2%",
    marginRight: "2%",
    marginBottom: 10
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    display: "flex"
  },
  img: {
    width: 350,
    // margin: "auto" 
  },
  imageContainer: {
    position: "relative",
    textAlign: "center"
  },
  centeredText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
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

class MainMenu extends React.Component {
  render() {
    const { classes, items } = this.props;

    return (
      <div className={classes.root}>
        <Row className={classes.row} itemsClassName={classes.item}>
          <Item>
            <div className={classes.imageContainer}>
              <img
                className={classes.img}
                alt="err"
                src="http://corpthemes.com/html/isuzu/images/portfolio/simple/2.jpg"
              ></img>
              <div className={classes.centeredText}>
                Text
            </div>
            </div>
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
        </Row>
      </div>
    );
  }
}

export default withStyles(classes)(MainMenu);
