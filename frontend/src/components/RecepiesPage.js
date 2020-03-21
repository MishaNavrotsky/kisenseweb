import React from "react";
import { withStyles, Button, Paper } from "@material-ui/core";
import RecepiesMenu from "./RecepiesMenu";

const classes = theme => ({
  filterButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 10,
    '& > button': {
      borderColor: theme.palette.primary[100],
      marginLeft: 5,
      marginRight: 5,
      '&:hover': {
        color: theme.palette.primary.main,
      }
    }
  },
  paperContainer: {
    display: "flex",
    justifyContent: "center",
  },
  paperImage: {
    width: "100%",
    height: "auto",
    margin: "auto"
  }
});

function generateImgUrl() {
  return `https://i.picsum.photos/id/${~~(Math.random() * 100)}/800/480.jpg`;
}
class RecepiesPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.filterButtonContainer}>
          <Button>I love</Button>
          <Button>Big</Button>
          <Button>Black</Button>
          <Button>Burgerrs</Button>
          <Button>In my country</Button>
          <Button>of birth</Button>
          <Button>like ofc</Button>
          <Button>Russia</Button>
          <Button>Or maybe</Button>
          <Button>Ukraine</Button>
        </div>
        <div className={classes.paperContainer}>
          <Paper><img src={generateImgUrl()} className={classes.paperImage}></img></Paper>
        </div>
        <RecepiesMenu></RecepiesMenu>
      </div>
    );
  }
}

export default withStyles(classes)(RecepiesPage);
