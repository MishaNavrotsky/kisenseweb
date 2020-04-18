import React from "react";
import { withStyles, Typography } from "@material-ui/core";

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
    top: "65%",
    left: "50%",
    color: "black",
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
                src="images\applications_img.png"
              ></img>
              <Typography className={classes.centeredText}>
                APPLICATIONS
            </Typography>
            </div>
          </Item>
          <Item>
          <div className={classes.imageContainer}>
              <img
                className={classes.img}
                alt="err"
                src="images\recipes_img.png"
              ></img>
              <Typography className={classes.centeredText}>
                RECIPES
            </Typography>
            </div>
          </Item>
          <Item>
          <div className={classes.imageContainer}>
              <img
                className={classes.img}
                alt="err"
                src="images\backgrounds_img.png"
              ></img>
              <Typography className={classes.centeredText}>
                BACKGROUNDS
            </Typography>
            </div>
          </Item>
        </Row>
        <Row className={classes.row} itemsClassName={classes.item}>
          <Item>
          <div className={classes.imageContainer}>
              <img
                className={classes.img}
                alt="err"
                src="images\games_img.png"
              ></img>
              <Typography className={classes.centeredText}>
                GAMES
            </Typography>
            </div>
          </Item>
          <Item>
          <div className={classes.imageContainer}>
              <img
                className={classes.img}
                alt="err"
                src="images\service_img.png"
              ></img>
              <Typography className={classes.centeredText}>
                SERVICE
            </Typography>
            </div>
          </Item>
          <Item>
          <div className={classes.imageContainer}>
              <img
                className={classes.img}
                alt="err"
                src="images\applications_img.png"
              ></img>
              <Typography className={classes.centeredText}>
                GUIDES
            </Typography>
            </div>
          </Item>
        </Row>
        <Row className={classes.row} itemsClassName={classes.item}>
          <Item>
          <div className={classes.imageContainer}>
              <img
                className={classes.img}
                alt="err"
                src="images\applications_img.png"
              ></img>
              <Typography className={classes.centeredText}>
                OTHER
            </Typography>
            </div>
          </Item>
          <Item>
          <div className={classes.imageContainer}>
              <img
                className={classes.img}
                alt="err"
                src="images\applications_img.png"
              ></img>
              <Typography className={classes.centeredText}>
                MENUS
            </Typography>
            </div>
          </Item>
          <Item>
          <div className={classes.imageContainer}>
              <img
                className={classes.img}
                alt="err"
                src="images\applications_img.png"
              ></img>
              <Typography className={classes.centeredText}>
                FOR KISENSE
            </Typography>
            </div>
          </Item>
        </Row>
      </div>
    );
  }
}

export default withStyles(classes)(MainMenu);