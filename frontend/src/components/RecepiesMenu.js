import React from "react";
import { withStyles, Paper, Button } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

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
    display: "flex",
    cursor: "pointer"
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
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: '1%',
    marginRight: 'auto'
  },
  greenButton: {
    marginLeft: 5,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    }
  }
});

class RecepiesMenu extends React.Component {
  handleSelect = (event, n) => {
    this.props.onSelect(event, n)
  }

  render() {
    const { classes, data } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.row}>
          <div className={classes.itemGroup}>
            <div className={classes.item} onClick={(event) => this.handleSelect(event, data[0]._id)}>
              <img
                className={classes.img}
                alt="err"
                src={data[0]?.smallSlide.imageUrl}
              ></img>
            </div>
            <div className={classes.item} onClick={(event) => this.handleSelect(event, data[1]._id)}>
              <img
                className={classes.img}
                alt="err"
                src={data[1]?.smallSlide.imageUrl}
              ></img>
            </div>
          </div>
          <div className={classes.itemGroup}>
          <div className={classes.item} onClick={(event) => this.handleSelect(event, data[2]._id)}>
              <img
                className={classes.img}
                alt="err"
                src={data[2]?.smallSlide.imageUrl}
              ></img>
            </div>
            <div className={classes.item} onClick={(event) => this.handleSelect(event, data[3]._id)}>
              <img
                className={classes.img}
                alt="err"
                src={data[3]?.smallSlide.imageUrl}
              ></img>
            </div>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.itemGroup}>
          <div className={classes.item} onClick={(event) => this.handleSelect(event, data[4]._id)}>
              <img
                className={classes.img}
                alt="err"
                src={data[4]?.smallSlide.imageUrl}
              ></img>
            </div>
            <div className={classes.item} onClick={(event) => this.handleSelect(event, data[5]._id)}>
              <img
                className={classes.img}
                alt="err"
                src={data[5]?.smallSlide.imageUrl}
              ></img>
            </div>
          </div>
          <div className={classes.itemGroup}>
          <div className={classes.item} onClick={(event) => this.handleSelect(event, data[6]._id)}>
              <img
                className={classes.img}
                alt="err"
                src={data[6]?.smallSlide.imageUrl}
              ></img>
            </div>
            <div className={classes.item} onClick={(event) => this.handleSelect(event, data[7]._id)}>
              <img
                className={classes.img}
                alt="err"
                src={data[7]?.smallSlide.imageUrl}
              ></img>
            </div>
          </div>
        </div>
        <div className={classes.buttons}>
          <Button className={classes.greenButton}>Add Recepie</Button>
          <Button className={classes.greenButton}>Download</Button>
        </div>
      </div>
    );
  }
}

export default withStyles(classes)(RecepiesMenu);
